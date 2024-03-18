import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import RopaHombre from './components/categorias/RopaHombre'
import RopaMujer from './components/categorias/RopaMujer'
import RopaNinos from './components/categorias/RopaNinos' 
import Accesorios from './components/categorias/Accesorios'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>          
          <Route path="/" element={<ItemListContainer bienvenida="Bienvenidos/as a nuestra tienda"/>}/>
          <Route path="/RopaHombre" element={<RopaHombre />}/>
          <Route path="/RopaMujer" element={<RopaMujer />}/>
          <Route path="/RopaNinos" element={<RopaNinos />}/>
          <Route path="/Accesorios" element={<Accesorios />}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>      
      </BrowserRouter>
          
    </div>
    
  )
}

export default App

