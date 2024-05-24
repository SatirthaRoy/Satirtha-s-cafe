import { Outlet } from "react-router-dom"
import Footer from "./Shared components/Footer"
import Nav from "./Shared components/Nav"
import { ScrollRestoration } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="max-w-[1920px] mx-auto">
      <Nav/>    
      <Outlet/>
      <Footer/>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      /> 
      <ScrollRestoration/>
    </div>
  )
}

export default App
