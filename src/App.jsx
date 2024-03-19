import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>          
          <Route path="/" element={<ItemListContainer bienvenida="Bienvenidos/as a nuestra tienda"/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="*" element={<h1>RUTA NO ENCONTRADA</h1>}/>
        </Routes>      
      </BrowserRouter>
          
    </div>
    
  )
}

export default App

