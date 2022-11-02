import './criar.scss'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import storage from 'local-storage';
import { alterimage, createProduct, DeleteProduct, alterProduct } from '../../../api/productApi';
import { ListProducts, ListProductsName, ListProductsId } from '../../../api/productApi.js';
import { ToastContainer, toast } from 'react-toastify';
function Home() {
  const { idParam } = useParams()
  const [usuario, setUsuario] = useState(storage('usuario-logado'))
  const [produtos, setProdutos] = useState([])
  const [filtro, setFiltro] = useState("")
  const [category, setCategory] = useState(0)
  const navigate = useNavigate();
  async function ListarProdutos() {
    setProdutos(await ListProducts())
  }
  async function Filtrar() {
    const resp = await ListProductsName(filtro, category);
    setProdutos(resp);
  }
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState()
  const [quantidade, setQuantidade] = useState()
  const [categoria, setCategoria] = useState()
  const [imagem, setImagem] = useState()

  async function carregarProduto() {
    const [r] = await ListProductsId(idParam)
    setNome(r.nm_produto)
    setDescricao(r.ds_produto)
    setPreco(r.vl_produto)
    setQuantidade(r.qnt_produto)
    setCategoria(r.id_categoria)
    setImagem(r.img_produto)
  }

  async function removerProduto(id) {
    const r = await DeleteProduct(id)
  }
  function mostrarImagem() {
    if (typeof (imagem) == 'object') {
      return URL.createObjectURL(imagem)
    } else {
      return `http://localhost:5000/${imagem}`
    }
  }
  async function editarProduto(){
    const novoProduto = await alterProduct(idParam, nome, descricao, preco, quantidade, categoria);
    const r = await alterimage(idParam, imagem)
    navigate('/products')
  }
  async function postarProduto() {
    try {
      if (!imagem) throw new Error('escolha uma imagem')
      else{
        const novoProduto = await createProduct(nome, descricao, preco, quantidade, categoria);
        const r = await alterimage(novoProduto.id, imagem)
        setNome('');
        setDescricao('')
        setPreco(0)
        setQuantidade(0)
        setCategoria(0)
        toast.success('🔥 Anúncio Postado Com Sucesso!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      
      }
    } catch (err) {
      if (err.response) toast.error(err.response.data.erro);
      else toast.error(err.message);
    }
  }
  useEffect(() => {
    Filtrar()
  }, [category, filtro])
  useEffect(() => {
    if (idParam) {
      carregarProduto()
    }
    if (usuario.admin != 1) {
      navigate('/')
    }
    else {
      ListarProdutos()

    }
  }, [])
  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <header>
        <Header />
      </header>
      <section className='Create-Product-Main'>
        <label> Nome:
          <input value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label> Descrição:
          <input value={descricao} onChange={e => setDescricao(e.target.value)} />
        </label>
        <label> Preço:
          <input type='number' value={preco} onChange={e => setPreco(Number(e.target.value))} />
        </label>
        <label> Quantidade:
          <input type='number' value={quantidade} onChange={e => setQuantidade(Number(e.target.value))} />
        </label>
        <label> Categoria:
          <input type='number' value={categoria} onChange={e => setCategoria(Number(e.target.value))} />
        </label>
        <label>Foto:</label>
        <input class="form-control w-25" type="file" onChange={e => setImagem(e.target.files[0])} />
        {!imagem
          ? <div></div>
          : <img className='w-25' src={mostrarImagem()} />
        }
        {!idParam
        ?<button type="button" class="btn btn-warning w-25 mt-5" onClick={() => {
          postarProduto()
        }}>Postar</button>
        : <button type="button" class="btn btn-warning w-25 mt-5" onClick={() => {
          editarProduto()
        }}>Editar</button>
        }
        
      </section>

      <div className='mt-5'>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <select value={category} onChange={(e) => setCategory(Number(e.target.value))} class="form-select" aria-label="Default select example">
                  <option value="0">Geral</option>
                  <option value="1">Casa e Cozinha</option>
                  <option value="2">Brinquedos</option>
                  <option value="3">Eletronicos</option>
                  <option value="4">Fitness</option>
                  <option value="5">Ferramentas</option>
                  <option value="6">Saúde e Beleza</option>
                </select>
              </ul>
              <form class="d-flex" role="search">
                <input style={{ width: '75vw', outline: 'none' }} class="form-control me-5" type="search" placeholder="Buscar Produto" aria-label="Search" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
              </form>
            </div>
          </div>
        </nav>
        <section className='Purchase-Main-Content'>
          {produtos.map((item) => (
            <div className='Purchase-Cards'>
              <section class="card w-75 m-5 d-flex flex-wrap p-3">
                <img class="card-img-top" src={`http://localhost:5000/${item.img_produto}`} />
                <div class="card-body">
                  <h5 class="card-title text-center d-flex justify-content-center">{item.nm_produto}</h5>
                  <p class="card-text text-center h-50">{item.ds_produto}</p>
                  <p class="card-text text-center h-50 text-success">R${item.vl_produto},00</p>
                  <a class="btn btn-primary w-100" onClick={() => {
                    navigate(`/admin/alterar/${item.id_produto}`)
                    window.location.reload(false)
                  }}>Editar</a>
                  <a class="btn btn-primary w-100 mt-2" onClick={() => {
                    removerProduto(item.id_produto)
                    window.location.reload(false)
                  }}>Apagar</a>
                </div>
              </section>
            </div>
          ))}
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Home;
