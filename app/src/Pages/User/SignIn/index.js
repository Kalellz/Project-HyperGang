import '../Log.scss';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Login } from "../../../api/userApi.js";
function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [erro, setErro] = useState('')
    async function entrarClick() {
        try {
            const r = await Login(email, senha);
            if (r.status === 400) {
                setErro(r.data.erro);
            } else {
                navigate('/')
            }
        } catch (err) {
            if (err.response.status === 400)
                setErro(err.response.data.erro)
        }
    }
    
    return (
        <main className='Sign-Main'>
            <div className='Sign-ButtonTo-Signup'>
                <button className="cta" onClick={() => navigate('/cadastro')}>
                    <span className="hover-underline-animation">Cadastre-Se</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button>
            </div>
            <section>
                <h1 className='Sign-Title'>Seja bem vindo de volta!</h1>
                <div className='Sign-Infos'>
                    <div className='Sign-Inputs'>
                        <div className="form__group field">
                            <input placeholder="Name" className="form__field" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <label className="form__label" for="name">Email</label>
                        </div>
                        <div class="form__group field">
                            <input placeholder="Name" className="form__field" type="input" value={senha} onChange={e => setSenha(e.target.value)} />
                            <label className="form__label" for="name">Senha</label>
                        </div>
                    </div>
                    <div className='Sign-Button'>
                        <button onClick={() => entrarClick()}>
                            <span>Estou Pronto!</span><i></i>
                        </button>
                    </div>
                    <div className="Sign-Erro">
                        {erro}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;

