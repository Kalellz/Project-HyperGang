import '../Log.scss';
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <main className='Sign-Main'>
            <div className='Sign-ButtonTo-Signup'>
                <button class="cta" onClick={() => navigate('/login')}>
                    <span class="hover-underline-animation">Login</span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button>
            </div>
            <section>
                <h1 className='Sign-Title'>Bem-vindo ao Utilit Outlet!</h1>
                <div className='Sign-Infos'>
                    <div className='Sign-Inputs'>
                        <div class="form__group field">
                            <input required="" placeholder="Name" class="form__field" type="input" />
                            <label class="form__label" for="name">Nome</label>
                        </div>
                        <div class="form__group field">
                            <input required="" placeholder="Name" class="form__field" type="input" />
                            <label class="form__label" for="name">Sobrenome</label>
                        </div>
                        <div class="form__group field">
                            <input required="" placeholder="Name" class="form__field" type="email" />
                            <label class="form__label" for="name">Email</label>
                        </div>
                        <div class="form__group field">
                            <input required="" placeholder="Name" class="form__field" type="password" />
                            <label class="form__label" for="name">Senha</label>
                        </div>
                    </div>
                    <div className='Sign-Button'>
                        <button>
                            <span>Estou Pronto!</span><i></i>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
