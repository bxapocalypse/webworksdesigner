import Navbar from './Navbar'
import hero from '../images/hero.jpg'
import Title from './Title'

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        {/* <!--header-nav ends--> */}

        <img
          className="header__hero"
          src={hero}
          alt="Mom holder her daughter"
        />
      </header>
      <h1 className="section-header">
        <Title title="CONRAD" />
      </h1>
    </>
  )
}
export default Header
