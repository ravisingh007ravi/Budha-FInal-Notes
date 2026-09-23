import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AllProduct from './components/pages/AllProduct.jsx'
import AllStock from './components/pages/AllStock.jsx'
import AllUser from './components/pages/AllUser.jsx'

export default function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/all_users' element={<AllUser/>}/>
        <Route path='/all_products' element={<AllProduct/>}/>
        <Route path='/all_stock' element={<AllStock/>}/>
      </Routes>

    </BrowserRouter>
  )
}
