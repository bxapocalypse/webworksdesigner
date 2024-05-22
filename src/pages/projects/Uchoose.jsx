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

        <p>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/w4ReR7CP38Q"
            title="UChoose Capacity Building Webinar - 19 July, 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </p>
        <h4>
          Innovation in Contraceptive Research Workshop (May 21-23, 2024 at the
          Sarova Whitesands Beach Resort in Mombasa, Kenya)
        </h4>
        <p>
          The Kenya Medical Research Institute (KEMRI) and CONRAD are partnering
          to implement an interactive scientific training opportunity designed
          to bolster the research capacity of early-career African
          investigators, by empowering professional communities with new
          approaches to elevate performance and enhance technical skills in
          contraceptive research. This three-day, hands-on workshop will provide
          cutting-edge information and demonstrations through plenary sessions,
          research tools, and networking opportunities for young investigators
          in the contraception field. Through morning plenary sessions, key
          international and local expert speakers will address topics including
          current contraception R&D and implementation, multi-purpose
          technologies (MPTs) and topical and systemic products. In afternoon
          break-out sessions, participants will have the opportunity to gain
          more in-depth, hands-on training in laboratory endpoints of clinical
          studies, Phase I clinical trial design and implementation, and
          human-centered research methodologies. There will also be the
          opportunity to participate in an intensive manuscript and
          grant-writing module, as well as a networking and poster session. Our
          hope is that the Innovation in Contraception Research workshop
          provides a valuable focus on research and networking tools capable of
          sustaining young, local investigators researching next-generation
          contraceptive products.
        </p>

        <p>
          <strong>
            The workshop will provide presentations, discussions, and practical
            sessions with technical experts on:
          </strong>
        </p>

        <p>
          <ul>
            <li>New Developments in Contraceptive Research & Development </li>
            <li>Hormonal & Non-hormonal Contraception </li>
            <li>Social and Behavioral Research/Human-Centered Design </li>
            <li>Mucosal Samples for Multiple Phase I Endpoints </li>
            <li>New Developments in Multi-Purpose Technologies (MPTs)</li>
            <li>Topical and Systemic Products </li>
            <li>
              Phase I Clinical Trials for New Contraceptives and MPTs (Safety,
              Pharmacokinetic, Pharmacodynamic Endpoints)
            </li>
            <li>Sperm Functional Assays </li>
            <li>Cervicovaginal Cytotoxicity Assays </li>
            <li>Grant and Manuscript Writing</li>
          </ul>
        </p>

        <p>
          The workshop is free, including participation in the workshop,
          materials and meals during the 3 days. Partial and full scholarships
          will be provided for travel and accommodation to a select number of
          participants. An accepted abstract will increase the chance for a full
          scholarship.
        </p>
        <p>
          <strong>Abstracts can be submitted on the following topics:</strong>
          <ul>
            <li>Contraception R&D and implementation </li>
            <li>
              Socio-behavioral research and end-user acceptability in
              reproductive health{' '}
            </li>
            <li>Multi-purpose technologies (MPTs) (contraception and STI)</li>
          </ul>
        </p>

        <p>Submission Deadline for Abstracts and Scholarships: 15 April 2024</p>
        <p>
          If you are interested in attending and/or submitting an abstract,
          please contact the workshop hosts at crw@evms.edu for additional
          information and requirements to apply for a partial/full scholarship
          and abstract submissions. Please also Click here to Register!
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
