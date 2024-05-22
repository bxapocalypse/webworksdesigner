import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'
import Footer from '../../components/Footer'

import featuredImg from '../../images/LADDSWebsiteHighlight.jpeg'

const longActing = () => {
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
        <div className="date">Wednesday, October 19, 2022</div>
        <h1>
          Long-acting drug delivery systems for HIV treatment and prevention
        </h1>
        <div className="featuredImg">
          <img src={featuredImg} alt="featured" />
        </div>
        <p>
          Despite ongoing efforts to increase treatment and prevention of HIV,
          poor and inconsistent adherence to daily pre-exposure prophylaxis has
          emerged as a key barrier to achieving the UNAIDS (The Joint United
          Nations Programme on HIV/AIDS) global targets for reducing annual HIV
          infections and AIDS-related deaths. There are many factors that
          present significant challenges to adherence to the primary route for
          currently marketed antiretrovirals, daily oral pills, including social
          acceptance of a regimen, side effects, and pill burden and fatigue.
        </p>
        <p>
          As part of our mission to conceive novel products that truly address
          end-user wants and needs, CONRAD invests significant effort into
          overcoming many conventional treatment barriers for underserved
          populations in need of antiretroviral therapies. The development of
          long-acting, potent antiretrovirals thanks in part to parallel
          advancement of controlled release technologies enables drug delivery
          systems to potentially provide extended dosing intervals capable of
          overcoming some of the challenges that result in suboptimal drug
          adherence during daily oral dosing.
        </p>
        <p>
          Long-acting HIV pre-exposure prophylaxis (PrEP) approaches: recent
          advances, emerging technologies, and development challenges
        </p>
        <p>
          Staying conscious of the key technological challenges, knowledge gaps,
          and preclinical testing considerations that still have yet to be fully
          overcome, CONRAD is developing a number of innovative long-acting
          systems that keenly integrate end-user perspectives:
          <ul>
            <li>CAB injectable silica matrix hydrogel depot</li>
            <li>CAB multi-pellet system</li>
            <li>TAF suspension patch</li>
            <li>
              3D printed microarray patch for the controlled and delayed release
              of HIV broadly neutralizing antibodies (bnAbs)
            </li>
          </ul>
        </p>
        <p>
          The HIV prevention field continues to evolve more rapidly than ever
          before, presenting both new opportunities and new challenges in
          developing next-generation long-acting HIV prevention options.
          Requirements for implementing viable long-acting PrEP products in
          resource-limited settings remain particularly challenging, requiring a
          proactive approach open to flexible product modifications during the
          design and testing phases of these promising new candidates. If these
          new technologies and design techniques can be successfully translated,
          next-generation long-acting PrEP that is safe, affordable, and highly
          effective will offer significant potential to curb the HIV pandemic.
        </p>
      </section>

      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default longActing
