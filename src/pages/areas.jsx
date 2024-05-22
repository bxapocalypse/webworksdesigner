import SecondaryHeader from '../components/secondaryHeader'
import areaHero from '../images/ambassador-1-5373x2169.jpeg'

import Footer from '../components/Footer'

import Impact from '../components/Impact'

function Areas() {
  return (
    <div className="wrapper">
      <SecondaryHeader heroUrl={areaHero} />
      <h1 class="section-header">Areas of R&D</h1>
      <section class="intro" id="main-content">
        <p>
          CONRAD’s accomplishments expose the pressing need to continue
          conducting innovative research and development. Our products are
          designed primarily for women in low-resource settings, and thus a
          large emphasis is put on safety, effectiveness, affordability, and
          acceptability/user-friendliness. Innovation and user-centered designs
          are our hallmark.
        </p>
      </section>{' '}
      <h1 class="section-header">Research Priorities</h1>
      <Impact />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Areas
