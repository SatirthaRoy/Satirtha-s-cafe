import { Outlet } from "react-router-dom"
import Footer from "./Shared components/Footer"
import Nav from "./Shared components/Nav"
import { ScrollRestoration } from "react-router-dom"

function App() {

  return (
    <div className="max-w-[1920px] mx-auto">
      <ScrollRestoration/>
      <Nav/>    
      <Outlet/>
      <Footer/>      
    </div>
  )
}

export default App
