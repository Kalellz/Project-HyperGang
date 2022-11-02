import './home.scss'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import storage from 'local-storage'
function Home() {
  const [usuario, setUsuario] = useState(storage('usuario-logado'))
  const navigate = useNavigate();
  useEffect(() => {
    if(usuario.admin != 1){
      navigate('/')
    }
  },[])
  return (
    <main>
      <header>
        <Header/>
      </header>
      <section>
        <button type="button" class="btn btn-dark m-5" onClick={() => navigate("/admin/produto")}>Criar Produto</button>
        <button type="button" class="btn btn-dark m-5" onClick={() => navigate('/admin/categoria')}>Criar Categoria</button>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}

export default Home;
