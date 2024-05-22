import SecondarySubHeader from '../../components/SecondarySubHeader'

import nixHero from '../../images/NIXHIVCapSA.jpeg'
import Footer from '../../components/Footer'

import Sponsors from '../../components/Sponsors'

const Nix = () => {
  const heroClass = 'heroClass'
  const heroAlt = 'Engagement Project Hero Image'
  return (
    <div className="wrapper">
      <SecondarySubHeader
        heroUrl={nixHero}
        heroClass={heroClass}
        heroAlt={heroAlt}
      />
      <h1 class="section-header">NIX HIV</h1>
      <section class="intro" id="main-content">
        <h2>
          Next-Generation Products For Prevention of HIV Infection in Women:
          Project NIX HIV
        </h2>
        <p>
          The objective of Project NIX HIV was to develop novel long-acting
          systemic HIV prevention products that were less user-dependent,
          substantially facilitated adherence, were safe, effective, and easy to
          administer, and fit into the lifestyles of women, especially young
          women in sub-Saharan Africa at high risk for HIV infection. These
          activities included the development of:
        </p>
        <p>
          <ul>
            <li>
              Two next-generation long-acting cabotegravir implantable and
              injectable products for the prevention of HIV acquisition in women
            </li>
            <li>
              Development of a Human Centered Design-driven implant inserter for
              easy, low-cost subdermal pellet (or implant) insertion by
              limited-resource clinics
            </li>
            <li>
              Highly potent antiretroviral prodrug conjugates modified
              specifically for long-acting HIV prevention
            </li>
            <li>
              User-friendly microarray patch delivery systems for the
              long-acting release of antiretrovirals and broadly neutralizing
              antibodies
            </li>
            <li>
              Discrete choice experiments in sub-Saharan Africa to ascertain end
              user preferences for long-acting pre-exposure prophylaxis products
            </li>
            <li>
              A novel point-of-care diagnostic assay for real-time monitoring of
              ARVs
            </li>
            <li>
              Research capacity strengthening in the area of HIV prevention
              research through in-country and virtual research innovation
              training series in 8+ African countries
            </li>
          </ul>
        </p>

        <p>
          This program is made possible by the generous support of the American
          people through the United States Agency for International Development
          (USAID). The contents are the responsibility of CONRAD and do not
          necessarily reflect the views of USAID or the United States
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
export default Nix
