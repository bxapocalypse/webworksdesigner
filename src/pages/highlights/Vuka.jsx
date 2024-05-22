import SecondarySubHeaderNoHero from '../../components/SecondarySubHeaderNoHero'
import noHero from '../../images/spacer.png'
import Footer from '../../components/Footer'
import featuredImg from '../../images/VukaWebsiteHighlight.jpeg'

const vuka = () => {
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
        <div className="date">Wednesday, November 9, 2022</div>
        <h1>
          Vuka+: a novel smartphone-based PrEP adherence support intervention
          for adolescent girls and young women
        </h1>
        <div className="featuredImg">
          <img src={featuredImg} alt="featured" />
        </div>
        <p>
          <strong>
            CONRAD has recently presented its latest data on Vuka+, a new
            smartphone-based app to support adherence in adolescent girls/young
            women, at the Adherence 2023 Conference.
          </strong>
        </p>
        <p>
          Adherence to a daily pill can be challenging, especially for young
          populations. New technologies could provide significant improvements
          for individuals and providers to monitor and support adherence and
          engage with them outside of the clinic on their own time. Vuka+ is a
          smartphone intervention app tailored to support medication adherence,
          persistence, and social support for adolescent girls and young women
          in South Africa by connecting users to a supportive community of other
          women for sharing resources about relationships, wellness, and sexual
          health.
        </p>
        <p>
          The Vuka+ smartphone application has been specifically tailored for
          African AGYW in a way that is educational, practical, engaging, and
          culturally appropriate with the ultimate goal of supporting consistent
          use. CONRAD, The Behavior and Technology Laboratory, and One Cow
          Standing have further developed the HealthMpowerment intervention
          concept into Vuka+. The app and a pilot randomized clinical trial
          conducted in Cape Town, South Africa were implemented by CONRAD, The
          University of North Carolina at Chapel Hill, FHI 360, Desmond Tutu
          Health Foundation, and One Cow Standing, bringing customization and
          enhancement to existing platform features as well as adding new
          features:
          <ul>
            <li>
              A health tracker to help visualize and establish behavior patterns
              and meet adherence goals with calendars, analytics, and
              self-monitoring.
            </li>
            <li>
              Forums space for polls and discussions fostering community support
            </li>
            <li>Offline/low-bandwidth connectivity for better functionality</li>
            <li>
              Branding and aesthetic changes based on in-depth beta-tester
              feedback: HCD V brand
            </li>
          </ul>
        </p>
        <p>
          A pilot study examining acceptability and usability of the Vuka+
          intervention app found that one third of participants used the app
          consistently to track PrEP and reported high medication adherence (50%
          self-reported; &#62;80% pills taken). Participants also used the app
          an average of 5.6 times/week, finding the information trustworthy, the
          app easy to use, and the provided tools helpful for facing the
          challenges of taking PrEP. The medication and behavioral trackers were
          the most utilized and positively evaluated features, with 74% of
          testers agreeing that the app would help them to remember to take
          their daily pills.
        </p>
        <p>
          A refined version of the Vuka+ app based on results of the pilot study
          is currently undergoing an expanded effectiveness & implementation
          study.
        </p>
        <p>
          Vuka+ is part of the activities of Project ENGAGE, which is
          investigating factors associated with the acceptability of, and
          adherence to, oral PrEP in adolescent girls and young women in Africa
          who are at risk of HIV, acknowledging ever-expanding product choice.{' '}
        </p>
        <p>
          The app development and studies were made possible by the generous
          support of the American people from the U.S. President’s Emergency
          Plan for AIDS Relief, through the United States Agency for
          International Development (USAID). The contents are the responsibility
          of CONRAD and do not necessarily reflect the views of USAID or the
          United States Government.
        </p>
      </section>

      <Footer />
      {/* wrapper ends */}
    </div>
  )
}
export default vuka
