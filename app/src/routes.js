import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/User/SignIn';
import Logup from './Pages/User/SignUp';
import Purchase from './Pages/Purchase';
import DispenserPDDA from './Pages/Purchase/DispenserPDDA'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Logup />} />
                <Route path="/products" element={<Purchase />} />
                <Route path="/product/DispenserPDDA" element={<DispenserPDDA />} />
            </Routes>
        </BrowserRouter>
    );
}