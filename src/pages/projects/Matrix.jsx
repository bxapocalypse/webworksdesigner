import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'

import Footer from '../../components/Footer'

import Sponsors from '../../components/Sponsors'

const Matrix = () => {
  return (
    <div className="wrapper">
      <SecondarySubHeaderNoHero heroUrl={noHero} className="noWidth" />
      <h1 class="section-header">Matrix</h1>
      <section class="intro" id="main-content">
        <h2>
          Microbicide Research and Development to Advance HIV Prevention
          Technologies through Responsive Innovation and Excellence: Project
          MATRIX
        </h2>
        <p>
          The mission of MATRIX, a program funded by USAID, is to develop an
          innovative range of acceptable, affordable, scalable, and ultimately
          deliverable products designed to address the unmet needs of women at
          risk of HIV.
        </p>
        <p>
          CONRAD has joined eighteen partner organizations in the United States
          and Sub-Saharan Africa who are experts in product development,
          clinical trials, social and behavioral research, and market and
          business case development to develop multiple products:
        </p>
        <ul>
          <li>
            Cabotegravir Injectable Hydrogel Depot (+ levonorgestrel)
            Cabotegravir
          </li>
          <li>
            Pellet Implants (+ levonorgestrel) TAF/ EVG On-Demand Dual
            Compartment
          </li>
          <li>(Vaginal/Rectal) Fast Dissolving Insert</li>
        </ul>
        <p>
          For more information about the MATRIX program and partners, visit the
          MATRIX Consortium.
        </p>
        <p>
          This program was made possible by the generous support of the American
          people through the U.S. Agency for International Development (USAID)
          and the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR). The
          contents of this page are the responsibility of CONRAD and do not
          necessarily reflect the views of USAID, PEPFAR, or the United States
          Government.
        </p>
      </section>
      <h1 class="section-header">Our Sponsors</h1>
      <Sponsors />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Matrix
