import Header from '../components/Header'
import Info from '../components/Info'
import Highlights from '../components/Highlights'
import Impact from '../components/Impact'
import Gamechange from '../components/Gamechange'
import Footer from '../components/Footer'
import Backtotop from '../components/Backtotop'

const Home = () => {
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
      </div>
      {/* <!--wrapper ends--> */}
    </>
  )
}

export default Home
