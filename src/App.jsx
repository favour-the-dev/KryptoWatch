import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyChoose from "./components/whychoose";
import Market from "./components/Market";
function App() {

  return (
    <>
      <div className="w-screen">
         <Navbar />
         <Hero />
         <WhyChoose />
         <Market />
      </div> 
    </>
  )
}

export default App
