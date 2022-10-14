import '../products.scss'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { FaStar } from 'react-icons/fa'
import { useState } from "react";
import Carousel from 'react-elastic-carousel'
import dispensador1 from '../../../Assets/images/Dispensador-image-1.jpg'
import dispensador2 from '../../../Assets/images/Dispensador-image-2.jpg'
import dispensador3 from '../../../Assets/images/Dispensador-image-3.jpg'
import coins from '../../../Assets/images/coins.png'
import airport from '../../../Assets/images/airport.png'
function App() {
  const stars = Array(5).fill(0)
  const [valorEstrela] = useState(3)
  const [quantidade, setQuantidade] = useState()
  const colorStar = {
    orange: "#F6D523",
    gray: "#B4B4B4"
  }
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className='products-Main-Content'>
        <div className='products-Principal-Content'>
          <div className='products-View'>
            <nav className='products-nav-links'>
              <a href='/'>Home</a>
              <span className='products-nav-links-separator'>/</span>
              <a href='/products'>Produtos</a>
              <span className='products-nav-links-separator'>/</span>
              <a className='products-nav-links-selected'>Dispenser Pasta De Dente Automático</a>
            </nav>
            <div className='products-View-Carousel'>
              <Carousel>
                <img src={dispensador1} class="w-75 shadow-lg bg-body rounded" />
                <img src={dispensador3} class="w-75 shadow-lg bg-body rounded" />
                <img src={dispensador2} class="w-75 shadow-lg bg-body rounded" />
              </Carousel>
            </div>
          </div>
          <div className='products-Description'>
            <div className='products-Description-Content'>
              <h1 className='products-Description-Title'>Dispenser Pasta De Dente Automático</h1>
              <div className='products-Description-Stars'>
                {stars.map((_, index) => {
                  return (
                    <FaStar className="estrela" key={index}
                      color={(valorEstrela) > index ? colorStar.orange : colorStar.gray} />
                  )
                })}
                <h1>(5 Reviews)</h1>
              </div>
              <h6>R$ 255,90</h6>
              <div className='products-Description-Portion'>
                <img src={coins} />
                <h2>Em até 12x de <span>R$ 25,71</span></h2>
              </div>
              <div>
                <h1 className='fs-4 pt-4 pb-2'>Cores</h1>
                <ul></ul>
                {/* CORES */}
              </div>
              <hr>
              </hr>
              <h1 className='fs-6 text-success'>Em estoque</h1>
              {/* EM ESTOQUE */}
              <div className='products-Description-Buy'>
                <input type='number' min={1} placeholder='quantidade' value={quantidade} onChange={((e) => setQuantidade(e.target.value))} />
                <button>Comprar</button>
              </div>
              <div className='products-Description-Frete'>
                <img src={airport} />
                <h5> <span>Frete Grátis</span> para <span>São Paulo, SP e Região</span><br />
                  Entrega estimada entre 18 de outubro e 16 de novembro.</h5>
              </div>
              <div>
                {/* CARTOES ACEITOS */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
