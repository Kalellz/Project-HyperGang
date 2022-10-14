import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Purchase from './Pages/Purchase';
import DispenserPDDA from './Pages/Purchase/DispenserPDDA'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Purchase />} />
                <Route path="/product/DispenserPDDA" element={<DispenserPDDA />} />
            </Routes>
        </BrowserRouter>
    );
}