import './header.scss'
import logo from '../../../Assets/images/Logo/UtilityOutlet.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function Header() {
  const navigate = useNavigate();
  useEffect(() => {
  }, [])
  return (
    <header className='navbar fixed-top'>
      <div className='Header-Logo-Config'>
          <img src={logo}/>
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
        <button type="button" class="btn btn-outline-light w-25" onClick={() => navigate('/login')}>Login</button>
      </div>
    </header>
  );
}

export default Header;
