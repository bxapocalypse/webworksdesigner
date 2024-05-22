import Navbar from './Navbar'

const SecondaryHeader = ({ heroUrl, heroClass }) => {
  return (
    <>
      <header className="secondary__header">
        <Navbar />

        <div className="secondary__header__noHero">
          <img
            // src={secondHero}
            src={heroUrl}
            alt="Hero"
            className="noHero"
          />
        </div>
      </header>
    </>
  )
}

export default SecondaryHeader
