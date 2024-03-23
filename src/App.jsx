import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />

        <Routes>          
          <Route path="/" element={<ItemListContainer bienvenida="Bienvenidos/as a nuestra tienda"/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
          <Route path="*" element={<h1>RUTA NO ENCONTRADA</h1>}/>
        </Routes>      
      </BrowserRouter>
          
    </div>
    
  )
}

export default App

