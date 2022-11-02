import '../../home.scss';
export default function App() {
    return (
        <main className="About-Main">
            <div>
                <h1 className='fs-4 m-0 fw-bold'>Sobre Nós</h1>
                <hr className='mt-1' />
                <div className="About-Main-Content">
                    <div class="card">
                        <div class="card-header w-100">
                            Informações
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Atração de clientes</p>
                                <footer class="blockquote-footer">Estratégias para trazer novos clientes compradores até seu negócio. Ferramentas para vender mais para os clientes que já tem.</footer>
                            </blockquote>
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Aumente suas vendas</p>
                                <footer class="blockquote-footer">Campanhas de prontidão para o seu público alvo que jé está pronto para comprar. Criamos estímulos que potencializam suas vendas no digital.</footer>
                            </blockquote>
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Alcance segmentado</p>
                                <footer class="blockquote-footer">Aumente suas vendas alcançando as pessoas certas, com a mensagem certa, para transformar milhares de visualizações em clientes compradores.</footer>
                            </blockquote>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}