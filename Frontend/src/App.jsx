
import './App.css'
import Home from './Pages/home'
import Contact from './Pages/Contact'
import './index.css';
import About from './Pages/About';
import Books from './Pages/Books'
import Temp from './Pages/Temp';
import { Route, Router, Routes,Navigate } from 'react-router-dom'
import SignIN from './components/SignIN';
import{Toaster} from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
function App() {
const [authUser,setAuthUser] = useAuth()

  return (
  <>
  <div>
<Routes>
  <Route 
  path='/' 
  element={<Home/>}
  />
  <Route path='/books' element ={authUser?<Books/>:<Navigate to ='/signup'/>}/>
  <Route path='/contact' element = {<Contact/>}/>
  <Route path='/about' element = {<About/>}/>
  {/* <Route path='/' element = {<SignUP/>}/> */}
 <Route path='/signup' element = {<SignIN/>}/>
</Routes>
<Toaster/>
  </div>
  </>
  )
}

export default App
