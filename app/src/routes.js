import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HomeAdmin from './Pages/admin/Home-Admin';
import CriarProduto from './Pages/admin/Criar-Produto';
import CriarCategoria from './Pages/admin/Criar-Categoria';
import Login from './Pages/User/SignIn';
import Logup from './Pages/User/SignUp';
import Purchase from './Pages/Purchase';
import Produts from './Pages/Purchase/products'
import UserConfig from './Pages/User/alterConfig'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<HomeAdmin />} />
                <Route path="/admin/produto" element={<CriarProduto />} />
                <Route path="/admin/alterar/:idParam" element={<CriarProduto />} />
                <Route path="/admin/categoria" element={<CriarCategoria />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Logup />} />
                <Route path="/user/config" element={<UserConfig />} />
                <Route path="/products" element={<Purchase />} />
                <Route path="/product/:idParam" element={<Produts />} />
            </Routes>
        </BrowserRouter>
    );
}