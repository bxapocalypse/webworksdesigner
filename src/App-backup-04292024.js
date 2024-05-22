import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Info from './components/Info'
import Highlights from './components/Highlights'
import Impact from './components/Impact'
import Gamechange from './components/Gamechange'
import Footer from './components/Footer'
import Backtotop from './components/Backtotop'

// import Home from './pages/Home'
// import Who from './pages/Who'
// import What from './pages/What'

function App() {
  return (
    <>
      <div className="wrapper">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#site-footer" className="skip-link">
          Skip to site footer
        </a>

        <Header />
        <Info />
        <Highlights />
        <Impact />
        <Gamechange />
        <Backtotop />
        <Footer />

        {/* <Header />

        <Info />

        <Highlights />

        <Impact />

        <Gamechange />

        <Footer />

        <Backtotop /> */}
      </div>
      {/* <!--wrapper ends--> */}
    </>
  )
}

export default App
