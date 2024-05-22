import SecondaryHeaderNoHero from '../components/secondaryHeaderNoHero'
import noHero from '../images/spacer.png'
import Footer from '../components/Footer'
import '../css/noHero.css'
import PubIcons from '../components/PubIcons.jsx'

const Publications = () => {
  return (
    <div className="wrapper">
      <SecondaryHeaderNoHero heroUrl={noHero} className="noWidth" />
      <h1 className="section-header">Publications</h1>
      <section className="intro" id="main-content">
        <p>
          As researchers and innovators engaged in varied fields of public
          health, contributing to the advancement of the scientific landscape is
          a key pursuit in our mission to improve global health. To contribute
          to the invaluable fields we work in, CONRAD disseminates its results
          extensively through high-quality, timely publications in reputable
          open-access journals.
        </p>
      </section>
      <h1 className="section-header">Our Programs</h1>
      <PubIcons />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Publications
