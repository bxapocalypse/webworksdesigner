import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'

import Footer from '../../components/Footer'

import featuredImg from '../../images/InsertWebsiteHighlight.jpeg'

const conradCollab = () => {
  const heroAlt = 'Project Horizon'
  const heroClass = 'heroClass'
  return (
    <div className="wrapper">
      <SecondarySubHeaderNoHero
        heroUrl={noHero}
        heroClass={heroClass}
        heroAlt={heroAlt}
      />

      <section class="intro" id="main-content">
        <div className="date">Wednesday, April 19, 2023</div>
        <h1>
          CONRAD collaborates to develop dissolvable insert for prevention of
          HIV and HSV infection
        </h1>
        <div className="featuredImg">
          <img src={featuredImg} alt="featured" />
        </div>
        <p>
          <strong>
            Self-administrable inserts demonstrate high efficacy as topical
            on-demand pre- and post-exposure prophylaxis in macaques
          </strong>
        </p>
        <p>
          Thanks to several key collaborations, researchers at CONRAD have
          achieved an important research and development milestone in the fight
          against HIV with an on-demand topical delivery system that
          significantly reduces the risk of becoming infected. An insert
          combining the potent antivirals tenofovir alafenamide and elvitegravir
          that may be used both vaginally or rectally has shown preclinical
          proof-of-concept with high efficacy against HIV in preclinical macaque
          models. The insert has also been tested in Phase I clinical trials,
          both vaginally, and rectally, with excellent results. This novel
          insert is a promising new HIV and genital herpes prevention method,
          all in a package that is ultimately meant to be discreet, portable,
          affordable, and which can be easily self-administered on demand.
        </p>
        <p>
          On-demand topicals fill a critical gap in available products for PrEP
          users that might prefer occasional, infrequent product use over daily
          regimens or long-acting options due to specific lifestyles and
          patterns of sexual activity. The tenofovir alafenamide/elvitegravir
          insert will address this unmet need with a product that may be used
          either vaginally or rectally, either before sex or after as a “morning
          after” post-exposure prophylaxis. Tenofovir alafenamide and
          elvitegravir are both very potent antivirals that are parts of
          FDA-approved regimens for HIV treatment and/or prevention, with
          extensive preclinical and clinical data available.
        </p>
        <p>
          The product development work thus far has mostly been funded by PEPFAR
          through cooperative agreements between USAID and CONRAD/Eastern
          Virginia Medical School. In collaboration with CONRAD, Gilead
          Sciences, Inc. has provided the tenofovir and elvitegravir drug
          substances to support the development of this product. Combining both
          of these drugs into a single on-demand topical delivery system yields
          a flexible product with high efficacy, able to both block HIV virus
          from replicating and from integrating into the DNA of a host cell.
          These continuing advancements are supported by ongoing partnerships
          with the Microbicide Trial Network (NIH/NIAID/DAIDS), Magee-Womens
          Research Institute, the University of Pittsburgh, The University of
          Alabama at Birmingham, the Statistical Center for HIV/AIDS Research
          and Prevention, FHI 360, and MATRIX, a program funded by USAID’s
          Office of HIV/AIDS..
        </p>
        <p>
          CROI 2023 – Safety and PK/PD of a tenofovir alafenamide/ elvitegravir
          insert administered rectally
        </p>
        <p>
          The MTN-039 study was supported by the National Institute of Allergy
          and Infectious Diseases with co-funding from the Eunice Kennedy
          Shriver National Institute of Child Health and Human Development and
          the National Institute of Mental Health of the U.S. National
          Institutes of Health.
        </p>
        <p>
          Recently published clinical research from CONRAD’s own Phase I Study
          of the TAF/EVG inserts found them to be safe, acceptable, and
          satisfying PK/PD benchmarks for extended mucosal protection against
          HIV-1 and HSV-2:
        </p>
        <p>
          A Phase I Study to Assess Safety, Pharmacokinetics, and
          Pharmacodynamics of a Vaginal Insert Containing Tenofovir Alafenamide
          and Elvitegravir
        </p>

        <p>
          These results showcase the promise of this high-efficacy insert with
          dual modalities for vaginal or rectal use as a topical on-demand
          option for HIV and HSV prevention. Already self-administrable before
          or after sex in a way that may better align with the differing needs
          of HIV prevention users compared to other existing products, the
          inserts have already completed first-in-human clinical trials in men
          and women using a single dose vaginally or single or double dose
          rectally. A planned clinical study MATRIX-001, a multi-vaginal-dose
          Phase I safety/PK/PD study to evaluate the urogenital and systemic
          safety of the TAF/EVG insert, will be conducted at the EVMS Clinical
          Research Center (US), CAPRISA (SA), and KEMRI (Kenya).
        </p>

        <p>
          Product development and main studies were made possible by the
          generous support of the American people through the United States
          Agency for International Development (USAID). The contents are the
          responsibility of CONRAD and do not necessarily reflect the views of
          USAID or the United States Government.
        </p>
      </section>

      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default conradCollab
