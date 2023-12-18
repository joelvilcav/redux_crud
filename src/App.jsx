import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <Router>
      <Header />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/products/new' element={<NewProduct />}/>
          <Route path='/products/edit/:id' element={<EditProduct />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
