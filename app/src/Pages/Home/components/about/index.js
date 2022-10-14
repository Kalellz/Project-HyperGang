import '../../home.scss';
import logo1 from '../../../../Assets/images/Logo/UtilityOutlet2.gif'
import logo2 from '../../../../Assets/images/Logo/UtilityOutlet3.gif'
import logo3 from '../../../../Assets/images/Logo/UtilityOutlet.gif'
export default function App() {
    return (
        <main className="About-Main">
            <div>
                <h1 className='fs-4 m-0 fw-bold'>Sobre Nós</h1>
                <hr className='mt-1' />
                <div className="About-Main-Content">
                    <div class="card mb-3 d-flex align-items-center">
                        <img src={logo1} class="card-img-top w-25 mt-3" />
                        <div class="card-body">
                            <h5 class="card-title">Atração de clientes</h5>
                            <p class="card-text">Estratégias para trazer novos clientes compradores até seu negócio. Ferramentas para vender mais para os clientes que já tem.</p>
                            <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card mb-3 d-flex align-items-center">
                        <img src={logo2} class="card-img-top w-25 mt-3"/>
                        <div class="card-body">
                            <h5 class="card-title">Aumente suas vendas</h5>
                            <p class="card-text">Campanhas de prontidão para o seu público alvo que jé está pronto para comprar. Criamos estímulos que potencializam suas vendas no digital.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card mb-3 d-flex align-items-center">
                        <img src={logo3} class="card-img-top w-25 mt-3" />
                        <div class="card-body">
                            <h5 class="card-title">Alcance segmentado</h5>
                            <p class="card-text">Aumente suas vendas alcançando as pessoas certas, com a mensagem certa, para transformar milhares de visualizações em clientes compradores.</p>
                            <p class="card-text"><small class="text-muted">Last updated 2 month ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}