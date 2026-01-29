import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Services'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseReducer from "./Hooks/UseReducer";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="Nagendra"/>}/>
        <Route path='/about' element={<About name="Nagendra" age={20} dept="CSE(CS)"/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useRef' element={<UseRef/>}/>
        <Route path='/useReducer' element={<UseReducer/>}/>
        <Route path='/useMemo' element={<UseMemo/>}/>
        <Route path='/useCallback' element={<UseCallback/>}/>
      </Routes>
    </>  
  )
}
export default App