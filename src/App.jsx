import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyChoose from "./components/whychoose";
import Market from "./components/Market";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <div className="w-screen">
         <Navbar />
         <Hero />
         <WhyChoose />
         <Market />
         <News />
         <Footer />
      </div> 
    </>
  )
}

export default App
