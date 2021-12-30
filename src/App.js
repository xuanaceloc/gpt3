import {Header , WGPT, Features, Posibility, Blog , Footer} from './container'
import {Navbar, Brand, CTA} from "./components"

import './App.css';

function App() {
  return (
    <div className="App">
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand/>
        <WGPT />
        <Features />
        <Posibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
