
import './App.css'
import Home from './Pages/home'
import Contact from './Pages/Contact'
import './index.css';
import About from './Pages/About';
import Books from './Pages/Books'
import Temp from './Pages/Temp';
import SignUP from './components/SignUP';
import { Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
  <>
  <div>
<Routes>
  <Route 
  path='/' 
  element={<Home/>}
  />
  <Route path='/books' element ={<Books/>}/>
  <Route path='/contact' element = {<Contact/>}/>
  <Route path='/about' element = {<About/>}/>
  <Route path='/signup' element = {<SignUP/>}/>
 
</Routes>

  </div>
  </>
  )
}

export default App
