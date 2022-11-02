import './header.scss'
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
  return (
    <header className='navbar fixed-top'>
      <div>
      </div>
      <div className='Header-Links-Config'>
        <ul class="nav justify-content-end">
          {usuario.admin === 1 
          ? <li class="nav-item">
          <a class="nav-link fw-semibold text-white" href="/admin">Tela Admin</a>
          </li>
        : <div></div>
          }
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
