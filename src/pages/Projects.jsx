import SecondaryHeader from '../components/secondaryHeader'
import projectHero from '../images/projectsHero.jpeg'

import Footer from '../components/Footer'

import Icons from '../components/Icons'

const Projects = () => {
  return (
    <div className="wrapper">
      <SecondaryHeader heroUrl={projectHero} />
      <h1 class="section-header">Projects</h1>
      <section class="intro" id="main-content">
        <p>
          CONRAD’s projects strive to improve global health, in particular
          women’s and reproductive health, by developing and testing innovative
          user-centered technologies. Our projects provide safety, efficacy, and
          affordability to those in low-resource settings through methods and
          technologies focused on prevention of HIV and other sexually
          transmitted infections, unintended pregnancies, reproductive
          disorders, and maternal and neonatal disease.
        </p>
      </section>
      <h1 class="section-header">Our Programs</h1>
      <Icons />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Projects
