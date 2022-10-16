import './header.scss'
import logo from '../../../Assets/images/Logo/UtilityOutlet.svg';
import userDefaultIcon from '../../../Assets/images/user-icon.jpg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import storage from 'local-storage';
function Header() {
  const [usuario, setUsuario] = useState(storage('usuario-logado'))
  const navigate = useNavigate();

  function sairClick() {
    storage.remove('usuario-logado')
    setTimeout(() => {
      navigate('/login')
    }, 500)

  }
  useEffect(() => {
  }, [])
  return (
    <header className='navbar fixed-top'>
      <div className='Header-Logo-Config'>
        <img src={logo} />
      </div>
      <div>
      </div>
      <div className='Header-Links-Config'>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link fw-semibold text-white" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold text-white" href="/products">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-semibold text-white" aria-current="page" href="#">Sobre Nós</a>
          </li>
        </ul>
        {!usuario
          ? <button type="button" class="btn btn-outline-light w-25" onClick={() => navigate('/login')}>Login</button>
          : <div className='user-logado-header'>
            <button type="button" class="btn btn-outline-light" onClick={() => { sairClick() }}>Sair</button>
            <div className='user-config-header' onClick={() => navigate(`/user/config`)}>
              {!usuario.imagem 
              ? <img src={userDefaultIcon} />
              : <img src={`http://localhost:5000/${usuario.imagem}`}  />
              }
              <h1>{usuario.nome}</h1>
            </div>
          </div>}
      </div>
    </header>
  );
}

export default Header;
