import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'

import Footer from '../../components/Footer'

import Sponsors from '../../components/Sponsors'

const Horizon = () => {
  const heroAlt = 'Project Horizon'
  const heroClass = 'heroClass'
  return (
    <div className="wrapper">
      <SecondarySubHeaderNoHero
        heroUrl={noHero}
        heroClass={heroClass}
        heroAlt={heroAlt}
      />
      <h1 class="section-header">Project Horizon</h1>
      <section class="intro" id="main-content">
        <h2>
          Hydrogel Injectable Depot System for Next-Generation Long-Acting HIV
          Prevention and Contraception: Project Horizon
        </h2>
        <p>
          The objective of Project Horizon, funded by NIH/NIAID, is to develop
          preclinically a systemic, long-acting, multipurpose prevention
          technology (MPT) incorporating both effective contraceptive and HIV
          prevention agents, while integrating characteristics preferred by
          target end-users in a US cohort.
        </p>
        <p>
          Under an initial R61 phase, a first generation long-acting MPT
          injectable hydrogel depot was developed using dolutegravir, an HIV
          integrase inhibitor and levonorgestrel, a potent hormonal
          contraceptive. Under the ongoing R33 phase of Project Horizon, a more
          clinically relevant depot formulation, designed for co-delivery of
          levonorgestrel with the clinically proven, integrase inhibitor
          cabotegravir, has been selected for continued development. Activities
          supporting this development include:
        </p>
        <ul>
          <li>
            Preclinical proof-of-concept of a combination
            cabotegravir/levonorgestrel depot providing 3 months dual protection
            of HIV and pregnancy from low-volume subcutaneous injection
          </li>
          <li>
            Evaluation of user preferences for long acting MPT injectable
            product attributes through formative research and discrete choice
            experiment in US populations
          </li>
          <li>
            Initial engagement with the US FDA on the clinical development and
            regulatory strategy for a first-in-class long-acting MPT injectable
            delivery two proven drugs for HIV prevention and contraception
          </li>
          <li>
            This product is being developed with support leveraged from multiple
            awards, including Project MATRIX: A USAID Project to Advance the
            Research and Development of Innovative HIV Prevention Products for
            Women
          </li>
        </ul>
        <p>
          Research reported on this webpage was supported by the National
          Institutes of Health under award number R33AI142685.
        </p>
        <p>
          The content is solely the responsibility of the authors and does not
          necessarily represent the official views of the National Institutes of
          Health.
        </p>
      </section>
      <h1 class="section-header">Our Sponsors</h1>
      <Sponsors />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Horizon
