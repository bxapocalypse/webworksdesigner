import SubNavbar from './SubNavbar'

const SecondaryHeader = ({ heroUrl, heroClass, heroAlt }) => {
  return (
    <>
      <header className="secondary__header">
        <SubNavbar />

        <div className="secondary__header__hero">
          <img
            // src={secondHero}
            src={heroUrl}
            alt={heroAlt}
            className={heroClass}
          />
        </div>
      </header>
    </>
  )
}

export default SecondaryHeader
