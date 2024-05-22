import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'

import Footer from '../../components/Footer'

import featuredImg from '../../images/IVRRingWebsiteHighlight.jpeg'

const firstInClass = () => {
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
        <div className="date">Friday, October 13, 2023</div>
        <h1>
          First-in-Class Intravaginal Ring containing Tenofovir and
          Levonorgestrel for prevention of HIV and unintended pregnancy
        </h1>
        <div className="featuredImg">
          <img src={featuredImg} alt="featured" />
        </div>
        <p>
          CONRAD is developing a 90-day controlled-release intravaginal ring
          (IVR) available as both a tenofovir-containing or levonorgestrel and
          tenofovir dual reservoir device for protection against HIV, HSV-2, and
          unintended pregnancy. A ) confirmed the TFV/LNG and TFV-only
          intravaginal ring to be both safe and well-tolerated with highly
          favorable markers of protection against HIV-1, HSV-2 and pregnancy,
          promising expansion for choice of prevention tools among adolescent
          girls and women.
        </p>
        <p>
          There is still a significant unmet need for products that protect
          against the triple epidemics of HIV, unintended pregnancy, and HSV-2
          infection that women, especially those in low-income countries, face.
          Multipurpose prevention technologies (MPTs) like this IVR aim to
          simultaneously meet diverse sexual and reproductive health needs,
          including prevention and protection against multiple of these
          indications, with a single product.
        </p>
        <p>
          MPTs have great potential to provide significant global reproductive
          health benefits, especially in sub-Saharan Africa where market
          research has revealed that women highly prefer MPTs conferring
          protections against both HIV and unintended pregnancies instead of
          using separate methods. Long-acting MPTs have the potential to
          overcome current barriers to use of existing preexposure prophylaxis
          products such as adherence, stigma, lack of privacy for storing
          products, and perception of HIV risk by providing a safe and effective
          intervention that can be used independently without partner knowledge
          and with few side effects. An IVR that is usable for multiple
          indications, user-friendly, and discreet represents a significant
          advancement in the field of MPTs.
        </p>
        <p>
          The TFV/LNG IVR is currently in the clinical phase of development and
          has repeatedly met all benchmarks for safety, pharmacokinetics,
          pharmacodynamics, and drug release in women.
        </p>
        <p>
          A first-in-women Phase I trial (CONRAD-128) was previously completed
          in 2016 and an expanded Phase I study (CONRAD-138) in 2019, among
          others:
        </p>
        <p>
          A 90-day tenofovir reservoir intravaginal ring for mucosal HIV
          prophylaxis Randomized, placebo controlled phase I trial of safety,
          pharmacokinetics, pharmacodynamics and acceptability of tenofovir and
          tenofovir plus levonorgestrel vaginal rings in women Vaginal
          Microbiota and Mucosal Pharmacokinetics of Tenofovir in Healthy Women
          Using a 90-Day Tenofovir/Levonorgestrel Vaginal Ring Genital
          microbiota of women using a 90 day tenofovir or tenofovir and
          levonorgestrel intravaginal ring in a placebo controlled randomized
          safety trial in Kenya Acceptability of an intravaginal ring for
          simultaneously preventing HIV infection and pregnancy: Qualitative
          findings of the Kisumu Combined Ring Study, 2019
        </p>
        <p>
          This work was supported by the United States Centers for Disease
          Control and Prevention (CDC) with funds from the Division of HIV
          Prevention and the United States Agency for International Development
          (USAID) with funds from the U.S. President's Emergency Plan for AIDS
          Relief (PEPFAR) through cooperative agreement U01PS005183, 2017-2021.
        </p>
      </section>

      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default firstInClass
