import whatHero from '../images/UChooseInserterRotated-1937x696.png'
import Footer from '../components/Footer'
import SecondaryHeader from '../components/secondaryHeader'
import Info from '../components/Info'
import Highlights from '../components/Highlights'

const What = () => {
  return (
    <div className="wrapper">
      <SecondaryHeader heroUrl={whatHero} />
      <h1 className="section-header">What We Do</h1>
      <section class="intro" id="main-content">
        <p>
          CONRAD is a boutique hybrid of academia, non-profit, pharmaceutical/
          biomedical R&D, and sociobehavioral research/human-centered design
          encompassing end-to-end expertise. Our holistic approach to our work
          makes our products, technologies, and research solutions more
          innovative, cutting edge and likely to add real value in underserved
          and low-resource settings.
        </p>
      </section>{' '}
      <Info />
      <section class="intro" id="main-content">
        <p>
          From discovery to preclinical and early clinical testing, clinical
          trials (focusing on Safety, PK, PD, acceptability, and effectiveness),
          human-centered design and end-user research, and regulatory strategy,
          all the way through to implementation, CONRAD is committed to
          designing safe, affordable, and user-friendly solutions to global
          health challenges.
        </p>
      </section>
      <Highlights />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default What
