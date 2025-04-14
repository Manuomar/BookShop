
import './App.css'
import Home from './Pages/home'
import Contact from './Pages/Contact'
import './index.css';
import About from './Pages/About';
import Books from './Pages/Books'
import Temp from './Pages/Temp';
import { Route, Router, Routes } from 'react-router-dom'
import SignIN from './components/SignIN';
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
  {/* <Route path='/' element = {<SignUP/>}/> */}
 <Route path='/signup' element = {<SignIN/>}/>
</Routes>

  </div>
  </>
  )
}

export default App
