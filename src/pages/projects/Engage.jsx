import SecondarySubHeader from '../../components/SecondarySubHeader'

import engageHero from '../../images/MRU-2016x594.jpg'
import Footer from '../../components/Footer'

import Sponsors from '../../components/Sponsors'

const Engage = () => {
  const heroClass = 'heroClass'
  const heroAlt = 'Engagement Project Hero Image'
  return (
    <div className="wrapper">
      <SecondarySubHeader
        heroUrl={engageHero}
        heroClass={heroClass}
        heroAlt={heroAlt}
      />
      <h1 class="section-header">Project Engage</h1>
      <section class="intro" id="main-content">
        <h2>
          Expanding HIV Prevention Options For Adolescent Girls and Young Women:
          Project Engage
        </h2>
        <p>
          Project Engage contributes to the implementation of new HIV prevention
          methods by advancing our understanding of how different oral PrEP
          regimens can affect end-user demand, perceptions, and uptake,
          especially for adolescent girls and young women (AGYW) in resource
          constrained countries with high HIV incidence. Data on barriers and
          facilitators to oral PrEP uptake and adherence are being gathered to
          inform future implementation of HIV oral PrEP regimens for AGYW in
          Africa.
        </p>
        <p>
          Funded by a Global Development Alliance between USAID and Gilead
          Sciences, this CONRAD-managed project includes:
        </p>
        <ul>
          <li>
            Acceptability and Adherence Studies of Oral Descovy® (F/TAF) vs
            Truvada® (F/TDF) for the Prevention of HIV Acquisition in AGYW
          </li>
          <li>
            Refinement & Testing of a Novel Smartphone-Based Adherence Support
            Intervention Tailored for AGYW (Vuka+)
          </li>
          <li>
            Clinical Validation & Implementation of Point-of-Care Adherence
            Diagnostics Monitoring Assays
          </li>
          <li>
            Capacity Building, Research Utilization & Community Engagement
          </li>
        </ul>
        <p>For more information:</p>
        <p>Engage one-pager</p>
        <p>
          This program is made possible by the generous support of the American
          people from the U.S. President’s Emergency Plan for AIDS Relief,
          through the United States Agency for International Development
          (USAID). The contents of this page are the responsibility of CONRAD
          and do not necessarily reflect the views of USAID or the United States
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
export default Engage
