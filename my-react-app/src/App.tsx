import './App.css'
import { Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Sale from './components/Sale'
import ShoppingCart from './components/ShoppingCart'
import Fvourites from './components/Favourites'
import Lk from './components/Lk'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/shoppingCart'element={<ShoppingCart/>}/>
      <Route path='/favourites' element={<Fvourites/>}/>
      <Route path='/lk' element={<Lk/>}/>
    </Routes>
    </>
  )
}

export default App