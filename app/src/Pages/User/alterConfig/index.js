import './alterConfig.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { showUser, alterUser } from '../../../api/userApi.js'
function App() {
    const [usuarioStorage] = useState(storage('usuario-logado'))
    const [usuario, setUsuario] = useState([])
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState()
    const [situacaoNome, setSituacaoNome] = useState(0)
    const [situacaoSobrenome, setSituacaoSobrenome] = useState(0)
    const [situacaoEmail, setSituacaoEmail] = useState(0)
    const [situacaoSenha, setSituacaoSenha] = useState(0)

    const navigate = useNavigate();

    async function exibirUser(){
        const r = await showUser(usuarioStorage.id)
        setUsuario(r)
    }
    useEffect(() => {
        exibirUser()
        if (!usuario) {
            navigate('/')
        }
    }, [])
    function alterConfigVerification(){
        if(!nome){
            setNome(usuario.nm_usuario)
        }
        if(!sobrenome){
            setSobrenome(usuario.sbr_usuario)
        }
        if(!email){
            setEmail(usuario.ds_email)
        }
        if(!senha){
            setSenha(usuario.ds_senha)
        }
    }
    async function alterarConfig() {
        await alterUser(usuario.id_usuario, nome, sobrenome, email, senha)
    }
    console.log(nome)
    return (
        <main>
            <header>
                <Header />
            </header>
            <section className='alterConfig-Main'>
                <section>
                    <h1>Suas Configurações</h1>
                    <div>
                        <article>
                            {!situacaoNome
                                ? <div>
                                    <h1>Nome:</h1><p>{usuario.nm_usuario}</p>
                                </div>
                                : <div>
                                    <h1>Nome:</h1><p>{usuario.nm_usuario}</p>
                                    <input value={nome} onChange={(e) => setNome(e.target.value)} class="input" />
                                </div>
                            }
                            {situacaoNome === 0
                                ? <button onClick={() => {
                                    setSituacaoNome(1)
                                    alterConfigVerification()
                                }}><span>Alterar</span></button>
                                : <button onClick={() => {
                                    alterarConfig()
                                    window.location.reload(false);
                                }}><span>Concluir</span></button>
                            }
                        </article>
                        <article>
                            {!situacaoSobrenome
                                ? <div>
                                    <h1>Sobrenome:</h1><p>{usuario.sbr_usuario}</p>
                                </div>
                                : <div>
                                    <h1>Sobrenome:</h1><p>{usuario.sbr_usuario}</p>
                                    <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} class="input" />
                                </div>
                            }
                            {situacaoSobrenome === 0
                                ? <button onClick={() => {
                                    setSituacaoSobrenome(1)
                                    alterConfigVerification()
                                }}><span>Alterar</span></button>
                                : <button onClick={() => {
                                    alterarConfig()
                                    window.location.reload(false);
                                }}><span>Concluir</span></button>
                            }

                        </article>
                        <article>
                            {!situacaoEmail
                                ? <div>
                                    <h1>Email:</h1><p>{usuario.ds_email}</p>
                                </div>
                                : <div>
                                    <h1>Email:</h1><p>{usuario.ds_email}</p>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} class="input" />
                                </div>
                            }
                            {situacaoEmail === 0
                                ? <button onClick={() => {
                                    setSituacaoEmail(1)
                                    alterConfigVerification()
                                }}><span>Alterar</span></button>
                                : <button onClick={() => {
                                    alterarConfig()
                                    window.location.reload(false);
                                }}><span>Concluir</span></button>
                            }
                        </article>
                        <div className='alterConfig-user-config-person'>
                            <article>
                                <h1>Senha:</h1><button><span>Configurar Senha</span></button>
                            </article>
                            <article>
                                <h1>Image:</h1><button><span>Configurar Senha</span></button>
                            </article>
                        </div>
                    </div>
                </section>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default App;
