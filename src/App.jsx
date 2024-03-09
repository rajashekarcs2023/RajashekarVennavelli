import { BrowserRouter} from 'react-router-dom';
import {About, Contact,Quote, Experience, Hero, Navbar, Tech, Works, StarsCanvas, StarryBackground } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
            <StarryBackground/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Quote/>
        <Works/>
        
        <div className="relative z-0">
           <Contact/>
           <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter> )
}

export default App
