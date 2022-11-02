import '../Criar-Produto/criar.scss'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import { alterimagecategory, createCategory } from '../../../api/productApi'
function Home() {
  const [usuario, setUsuario] = useState(storage('usuario-logado'))
  const navigate = useNavigate();
  useEffect(() => {
    if (usuario.admin != 1) {
      navigate('/')
    }
  }, [])
  const [categoria, setCategoria] = useState('')
  const [imagem, setImagem] = useState()
  function mostrarImagem(){
    return URL.createObjectURL(imagem)
  }
  async function postarCategoria() {
    try {
      if(!imagem) throw new Error('escolha uma imagem') 
      else{
      const novoProduto = await createCategory(categoria);
      const r = await alterimagecategory(novoProduto.id, imagem)
      setCategoria('');
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
          <input value={categoria} onChange={e => setCategoria(e.target.value)} />
        </label>
        <label>Foto:</label>
        <input class="form-control w-25" type="file" onChange={e => setImagem(e.target.files[0])} />
        {!imagem 
        ? <div></div>
        : <img className='w-25' src={mostrarImagem()}/>
        }
        <button type="button" class="btn btn-warning w-25 mt-5" onClick={postarCategoria}>Criar</button>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Home;
