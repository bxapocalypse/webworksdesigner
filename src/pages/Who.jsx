import SecondaryHeader from '../components/secondaryHeader'
import whoHero from '../images/CONRAD_group_-_2023-5530x1523.jpg'
import poster from '../images/posters.jpg'
import Footer from '../components/Footer'

const Who = () => {
  return (
    <div className="wrapper">
      <SecondaryHeader heroUrl={whoHero} />
      <h1 className="section-header">Who We Are</h1>
      <section class="intro" id="main-content">
        <p>
          CONRAD is a cross-functional R&amp;D team with diverse expertise,
          brought together by a shared passion for our mission, and who together
          synergize to produce greater global health impact through the
          development of innovative user-centered technologies. Our
          game-changing products ultimately fill unmet global health needs and
          provide research knowledge to support and influence evidence-based
          decision making by key stakeholders in the field of global health.
        </p>
      </section>{' '}
      <div class="section-divider__three"></div>
      <section class="two__column__section">
        <div class="two__column__section-left">
          <h2>Our Goal</h2>
          <p class="two__column__section-p"></p>
          <p>
            Nurturing promising research in institutions worldwide, engaging in
            integrated preclinical, clinical, and sociobehavioral R&amp;D,
            partnering with private industry to bring new products onto the
            market, collaborating with other agencies, foundations, and
            non-governmental organizations, and training investigators
            throughout the world in preclinical and clinical research
            techniques.
          </p>
          <p>
            With R&amp;D roots in contraceptive drug delivery, CONRAD has grown
            to encompass expertise in women’s reproductive health, HIV/STI
            prevention, preclinical and clinical product development,
            human-centered design and drug delivery systems with an almost
            40-year history (since 1986) of success and productivity in these
            areas. Nested within Eastern Virginia Medical School, we have been
            and continue to be funded by a variety of public sector,
            philanthropic, and private sector organizations.
          </p>
          <p></p>
        </div>
        {/* <!--two__column__section-left ends--> */}
        <div class="two__column__section-right">
          <img
            src={poster}
            class="two__column__section-rightImg"
            alt="table with framed posters"
          />
        </div>

        {/* <!--two__column__section-right ends--> */}
      </section>
      <section class="intro" id="main-content">
        <p>
          <em>
            CONRAD was established in 1986 under a cooperative agreement between{' '}
            <a href="https://en.wikipedia.org/wiki/Eastern_Virginia_Medical_School">
              Eastern Virginia Medical School
            </a>{' '}
            (EVMS) and the{' '}
            <a href="https://en.wikipedia.org/wiki/United_States_Agency_for_International_Development">
              United States Agency for International Development
            </a>{' '}
            (USAID).
          </em>
        </p>
      </section>
      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default Who
