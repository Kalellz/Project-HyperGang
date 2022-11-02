import './screen.scss'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListProducts, ListProductsName } from '../../api/productApi.js'
import 'swiper/css';

function App() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([])
  const [filtro, setFiltro] = useState("")
  const [category, setCategory] = useState(0)
  async function ListarProdutos() {
    setProdutos(await ListProducts())
  }
  async function Filtrar() {
    const resp = await ListProductsName(filtro, category);
    setProdutos(resp);
  }
  useEffect(() => {
    Filtrar()
  }, [category, filtro])
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
                  navigate(`/product/${item.id_produto}`)
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
