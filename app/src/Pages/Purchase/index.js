import './screen.scss'
import Header from '../common/Header'
import Footer from '../common/Footer'
import dispensador1 from '../../Assets/images/Dispensador-image-1.jpg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListProducts, ListProductsName } from '../../api/productApi.js'
import 'swiper/css';

function App() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([])
  const [filtro, setFiltro] = useState("")
  async function ListarProdutos() {
    setProdutos(await ListProducts())
  }
  async function Filtrar() {
    const resp = await ListProductsName(filtro);
    setProdutos(resp);
  }
  useEffect(() => {
    Filtrar()
  }, [filtro])
  useEffect(() => {
    ListarProdutos()
  }, [])
  return (
    <main>
      <header>
        <Header />
      </header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Eletronicos</a></li>
                  <li><a class="dropdown-item" href="#">Fitness</a></li>
                  <li><a class="dropdown-item" href="#">Brinquedos</a></li>
                  <li><a class="dropdown-item" href="#">Casa e Cozinha</a></li>
                  <li><a class="dropdown-item" href="#">Ferramentas</a></li>
                  <li><a class="dropdown-item" href="#">Saúde e Beleza</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Geral</a></li>
                </ul>
              </li>
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
                      <a class="btn btn-primary w-100" onClick={() => {
                        navigate('/product/DispenserPDDA')
                      }}>Quero Ver!</a>
                    </div>
                  </section>
                </div>
          ))}
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
