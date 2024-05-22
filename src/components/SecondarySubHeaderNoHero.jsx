import SubNavbar from './SubNavbar'

const SecondarySubHeader = ({ heroUrl, heroClass }) => {
  return (
    <>
      <header className="secondary__header">
        <SubNavbar />

        <div className="secondary__header__noHero">
          <img src={heroUrl} alt="Hero" className="noHero" />
        </div>
      </header>
    </>
  )
}

export default SecondarySubHeader
