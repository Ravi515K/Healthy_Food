//import logo from './logo.svg';
import './App.css';
import Login from "./Routes/Login"
import AllRoutes from "./Routes/AllRoutes"
import Footer from "./Component/Footer"
import Organic from './Pages/Organic';
import StoreVisit from './Pages/StoreVisit';
import { Navbar } from './Component/Navbar';
import { createContext,useState} from "react"


export const cartContext=createContext()

 
function App() {
   const [cart, setCart]=useState([])
   const [number,setNumber]=useState(null);
   const [isLogin, setIsLogin]=useState(false)
  return (
  
       <cartContext.Provider value={{cart,setCart,number,setNumber, isLogin,setIsLogin}}>
            <AllRoutes/>
       </cartContext.Provider>

   
   
    //    <Footer /> 
    //  <Login/> 
    //  <Organic/> 
    //  <StoreVisit/> 
    //  <Navbar/> 
  
  )
}

export default App;
