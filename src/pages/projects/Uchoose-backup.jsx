import SecondarySubHeader from '../../components/SecondarySubHeader'
import uchooseHero from '../../images/UChooseInserterRotated-1937x696.png'
import Footer from '../../components/Footer'

import Sponsors from '../../components/Sponsors'

const Uchoose = () => {
  return (
    <div className="wrapper">
      <SecondarySubHeader heroUrl={uchooseHero} />
      <h1 class="section-header">Project Uchoose</h1>
      <section class="intro" id="main-content">
        <h2>
          A Personalized Contraception Platform for Women and Providers: Project
          UChoose
        </h2>
        <p>
          The objective of Project UChoose is to develop novel long-acting
          contraceptive products that, in addition to being safe and highly
          effective, reduce side effects and improve health benefits with a
          focus on versality and convenience. Building on existing
          collaborations with private sector entities and organizations in
          developing countries, these activities include:
        </p>
        <ul>
          <li>
            Studying the impact of selected widely-used and highly-effective
            contraceptives on the female reproductive tract (The UMPALA Clinical
            Research Study)
          </li>
          <li>
            Long-acting contraceptive development of a biodegradable, subdermal
            pellet implantable system for personalized contraception with
            reduced side effects
          </li>
          <li>
            Development of a human centered design-driven implant inserter
            device for safe, easy and rapid use by minimally trained healthcare
            providers in busy clinics
          </li>
          <li>
            Technology innovation incubator for assessing feasibility of novel,
            next- contraceptive delivery concepts
          </li>
          <li>
            Strengthening clinical endpoint research and human centered design
            capacity among local researchers in Sub-Saharan Africa
          </li>
        </ul>
        <p>
          This program is made possible by the generous support of the American
          People through the United States Agency for International Development
          (USAID), provided through cooperative agreement number
          7200AA20CA00019. The contents of this page are the sole responsibility
          of CONRAD and do not necessarily reflect the views of USAID or the
          United States Government.
        </p>
      </section>
      <h1 class="section-header">Project Resources</h1>
      <Sponsors />
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Uchoose
