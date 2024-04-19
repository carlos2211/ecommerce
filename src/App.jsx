import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import { Checkout } from "./components/Checkout/Checkout";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  
  return (
    <div className="app-container">
      <CartProvider>      
        <BrowserRouter>
          <Navbar />
          <Routes>          
            <Route path="/" element={<ItemListContainer bienvenida="Bienvenidos/as a nuestra tienda"/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>RUTA NO ENCONTRADA</h1>}/>
          </Routes>      
        </BrowserRouter>
        </CartProvider>
      <Footer/>
    </div>
    
  )
}

export default App

