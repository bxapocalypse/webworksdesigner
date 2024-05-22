import SecondaryHeaderNoHero from '../components/secondaryHeaderNoHero'
import noHero from '../images/spacer.png'
import Footer from '../components/Footer'

import HighlightsNav from '../components/HighlightsNav.jsx'

import '../css/noHero.css'

import '../css/noHero.css'

const HighlightsPage = () => {
  return (
    <div className="wrapper">
      <SecondaryHeaderNoHero heroUrl={noHero} className="noWidth" />
      <h1 className="section-header">Highlights</h1>
      <HighlightsNav />

      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default HighlightsPage
