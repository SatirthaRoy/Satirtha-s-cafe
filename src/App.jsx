import { Outlet } from "react-router-dom"
import Footer from "./Shared components/Footer"
import Nav from "./Shared components/Nav"

function App() {

  return (
    <div className="max-w-[1920px] mx-auto">
      <Nav/>    
      <Outlet/>
      <Footer/>      
    </div>
  )
}

export default App
