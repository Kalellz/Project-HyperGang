import './criar.scss'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { alterimage, createProduct } from '../../../api/productApi';
import { ToastContainer, toast } from 'react-toastify';
function Home() {
  const [usuario, setUsuario] = useState(storage('usuario-logado'))
  const navigate = useNavigate();
  useEffect(() => {
    if (usuario.admin != 1) {
      navigate('/')
    }
  }, [])
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState()
  const [quantidade, setQuantidade] = useState()
  const [categoria, setCategoria] = useState()
  const [imagem, setImagem] = useState()
  function mostrarImagem(){
    return URL.createObjectURL(imagem)
  }
  async function postarProduto() {
    try {
      if(!imagem) throw new Error('escolha uma imagem') 
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
        : <img className='w-25' src={mostrarImagem()}/>
        }
        <button type="button" class="btn btn-warning w-25 mt-5" onClick={postarProduto}>Postar</button>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Home;
