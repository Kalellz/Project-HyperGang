import "../products.scss";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import coins from "../../../Assets/images/coins.png";
import airport from "../../../Assets/images/airport.png";
import {
  ListProductsId,
  BuscarCorreio,
  BuscarCorreioUser,
} from "../../../api/productApi";
import { useParams } from "react-router-dom";
function App() {
  const { idParam } = useParams();
  const stars = Array(5).fill(0);
  const [produto, setProduto] = useState({});
  const [valorEstrela] = useState(3);
  const [quantidade, setQuantidade] = useState(1);
  const [cepUser, setCepUser] = useState();
  const [infosFrete, setInfosFrete] = useState({});
  const [userCorreio, setUserCorreio] = useState({});
  const [data, setData] = useState(new Date)
  const colorStar = { orange: "#F6D523", gray: "#B4B4B4" };

  async function carregarProduto() {
    const [resposta] = await ListProductsId(idParam);
    setProduto(resposta);
  }
  async function carregarCorreio() {
    const [r] = await BuscarCorreio(cepUser);
    setInfosFrete(r);
  }
  async function carregarCorreioUser() {
    setUserCorreio(await BuscarCorreioUser(cepUser));
    console.log(userCorreio);
  }
  useEffect(() => {
    carregarProduto();
  }, []);
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="products-Main-Content">
        <div className="products-Principal-Content">
          <div className="products-View">
            <nav className="products-nav-links">
              <a href="/">Home</a>
              <span className="products-nav-links-separator">/</span>
              <a href="/products">Produtos</a>
              <span className="products-nav-links-separator">/</span>
              <a className="products-nav-links-selected">
                {produto.nm_produto}
              </a>
            </nav>
            <div className="products-View-Carousel">
              <img
                src={`http://localhost:5000/${produto.img_produto}`}
                class="w-75 shadow-lg bg-body rounded "
              />
            </div>
          </div>
          <div className="products-Description">
            <div className="products-Description-Content">
              <h1 className="products-Description-Title">
                {produto.nm_produto}
              </h1>
              <div className="products-Description-Stars">
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      className="estrela"
                      key={index}
                      color={
                        valorEstrela > index ? colorStar.orange : colorStar.gray
                      }
                    />
                  );
                })}
                <h1>(5 Reviews)</h1>
              </div>
              <h6>R$ {produto.vl_produto * quantidade}</h6>
              <div className="products-Description-Portion">
                <img src={coins} />
                <h2>
                  Em até 12x de{" "}
                  <span>R$ {(produto.vl_produto / 12) * quantidade}</span>
                </h2>
              </div>
              <div>
                <ul></ul>
                {/* CORES */}
              </div>
              <hr></hr>
              <h1 className="fs-6 text-success">Em estoque</h1>
              <div className="products-Description-Buy">
                <input
                  type="number"
                  min={1}
                  placeholder="quantidade"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
                <button>Comprar</button>
                <h1>Calcular Frete</h1>
                <div className="cep-inputs">
                <input
                  type="number"
                  min={1}
                  placeholder="Seu Cep"
                  value={cepUser}
                  onChange={(e) => setCepUser(e.target.value)}
                />
                <button onClick={() => {
                  carregarCorreioUser();
                  carregarCorreio()
                }}>Buscar</button>
                </div>
              </div>
              {cepUser ? (
                <div className="products-Description-Frete">
                  <img src={airport} />
                  <h5>
                    <span>Frete por {infosFrete.Valor}</span> para {''}
                    <span>
                    {userCorreio.bairro}, {userCorreio.uf} e Região
                    </span>
                    <br />
                    Entrega estimada entre {data.getDay() + 10} do {data.getMonth() + 2} e {data.getDay() + 2} do {data.getMonth() - 9}.
                  </h5>
                </div>
              ) : (
                <div> </div>
              )}
              <div>{/* CARTOES ACEITOS */}</div>
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
