import { BrowserRouter,Route,Routes} from "react-router-dom";
import viteLogo from '/vite.svg'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Albums from "./Pages/Albums";


function App() {
 

  return (
    <>
     <div >
     <BrowserRouter>
        <Navbar/>

          <div className=" relative top-[100px] ">

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/albums" element={<Albums/>}/>
            </Routes>
          </div>
           
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
