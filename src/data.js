import infoImg1 from './images/info-box-img1.jpg'
import infoImg2 from './images/info-box-img2.jpg'
import infoImg3 from './images/info-box-img3.jpg'
import infoImg4 from './images/info-box-img4.jpg'
import infoImg5 from './images/info-box-img5.jpg'

import hiImg1 from './images/InsertWebsiteHighlight.jpeg'
import hiImg2 from './images/IVRRingWebsiteHighlight.jpeg'
import hiImg3 from './images/LADDSWebsiteHighlight.jpeg'
import hiImg4 from './images/VukaWebsiteHighlight.jpeg'

import iconImg1 from './images/iconImg1.jpeg'
import iconImg2 from './images/iconImg2.jpeg'
import iconImg3 from './images/iconImg3.png'
import iconImg4 from './images/iconImg4.png'
import iconImg5 from './images/iconImg5.jpeg'

import pubIcon1 from './images/contraceptiveIcon.png'
import pubIcon2 from './images/hiv-tech.png'
import pubIcon3 from './images/prod-dev.png'
import pubIcon4 from './images/clinic-trials.png'
import pubIcon5 from './images/monitoring.png'
import pubIcon6 from './images/hiv-sus.png'
import pubIcon7 from './images/biomarkers.png'

//Sponsor Images
import sponsorImg1 from './images/PEPFAR-327x203.png'
import sponsorImg2 from './images/USAID-491x147.png'
import sponsorImg3 from './images/MATRIX-474x196.png'
import sponsorImg4 from './images/CONRAD_Logo_Full-370x145.png'
import sponsorImg5 from './images/430px-Eastern_Virginia_Medical_School_logo.svg-290x85.png'

// Highlight Images

export const pageLinks = [
  //   { id: 1, href: 'index', text: 'home' },
  { id: 'who', href: 'Who', text: 'Who We Are' },
  { id: 'what', href: 'What', text: 'What We Do' },
  { id: 'areas', href: 'areas', text: 'Areas of R&D' },
  {
    id: 'projects',
    href: 'projects',
    text: 'Projects',
    subLinks: [
      { id: 'engage', href: 'projects/Engage', text: 'Engage' },
      { id: 'horizon', href: 'projects/Horizon', text: 'Horizon' },
      { id: 'matrix', href: 'projects/Matrix', text: 'Matrix' },
      { id: 'nix', href: 'projects/Nix', text: 'Nix' },
      { id: 'past', href: 'projects/Past', text: 'Past' },
    ],
  },
  { id: 'publications', href: 'publications', text: 'Publications' },
  {
    id: 'highlights',
    href: 'highlights',
    text: 'Highlights',
    subLinks: [
      {
        id: 'conradeCollab',
        href: 'highlights/ConradCollab',
        text: 'Conrad Collaborations',
      },
      {
        id: 'firstInClass',
        href: 'highlights/FirstInClass',
        text: 'First In Class',
      },
      {
        id: 'longActing',
        href: 'highlights/LongActing',
        text: 'Long Acting',
      },
      {
        id: 'vuka',
        href: 'highlights/Vuka',
        text: 'Vuka+',
      },
    ],
  },
]

export const subPageLinks = [
  //   { id: 1, href: 'index', text: 'home' },
  { id: 'who', href: '../../Who', text: 'Who We Are' },
  { id: 'what', href: '../../What', text: 'What We Do' },
  { id: 'areas', href: '../../areas', text: 'Areas of R&D' },
  { id: 'projects', href: '../../projects', text: 'Projects' },
  { id: 'publications', href: '../../publications', text: 'Publications' },
  { id: 'highlights', href: '../../highlights', text: 'Highlights' },
]

export const quickLinks = [
  { id: 1, href: '#info', text: 'Info' },
  { id: 2, href: '#highlights', text: 'Highlights' },
  { id: 3, href: '#impact', text: 'Impact' },
  { id: 4, href: '#game-change', text: 'gamechange' },
]

export const footerLinks = [
  { id: 'who', href: 'Who', text: 'Who We Are' },
  { id: 'what', href: 'What', text: 'What We Do' },
  { id: 'areas', href: 'areas', text: 'Areas of R&D' },
  { id: 'projects', href: 'projects', text: 'Projects' },
  { id: 'publications', href: 'publications', text: 'Publications' },
  { id: 'highlights', href: 'highlights', text: 'Highlights' },
]

export const footerSubLinks = [
  { id: 'who', href: '../../Who', text: 'Who We Are' },
  { id: 'what', href: '../../What', text: 'What We Do' },
  { id: 'areas', href: '../../areas', text: 'Areas of R&D' },
  { id: 'projects', href: '../../projects', text: 'Projects' },
  { id: 'publications', href: '../../publications', text: 'Publications' },
  { id: 'highlights', href: '../../highlights', text: 'Highlights' },
]

export const infoBoxes = [
  {
    id: 1,
    img: infoImg1,
    title: 'Who We Are',
    text: 'CONRAD is a cross-functional R&D team with diverse expertise, brought together by a shared passion for our mission to fill unmet global health needs.',
  },
  {
    id: 2,
    img: infoImg2,
    title: 'What We Do',
    text: 'Our holistic approach to our work makes our products, technologies, and research solutions more innovative, cutting edge and likely to add real value in underserved and low-resource settings.',
  },
  {
    id: 3,
    img: infoImg3,
    title: 'Areas of R&D',
    text: 'CONRAD’s products are designed primarily for women in low-resource settings with an emphasis on safety, effectiveness, affordability, and acceptability/user-friendliness.',
  },
  {
    id: 4,
    img: infoImg4,
    title: 'Our Projects',
    text: 'CONRAD’s R&D programs endeavor to improve global health, in particular women’s and reproductive health, by developing and testing innovative user-centered technologies.',
  },
  {
    id: 5,
    img: infoImg5,
    title: 'Publications',
    text: 'To contribute to the invaluable fields we work in, CONRAD disseminates its results extensively through high-quality, timely publications in reputable open-access journals.',
  },
]

export const highLights = [
  {
    id: 1,
    date: '04/19/2023',
    img: hiImg1,
    text: 'CONRAD collaborates to develop dissolvable insert for prevention of HIV and HSV infection',
    btnLink: 'newsItem1',
    btnText: 'More',
    href: 'highlights/ConradCollab',
  },
  {
    id: 2,
    date: '10/13/2023',
    img: hiImg2,
    text: 'First-in-Class Intravaginal Ring containing Tenofovir and Levonorgestrel for prevention of HIV and unintended pregnancy',
    btnLink: 'newsItem2',
    btnText: 'More',
    href: 'highlights/FirstInClass',
  },
  {
    id: 3,
    date: '10/19/2022',
    img: hiImg3,
    text: 'Long-acting drug delivery systems for HIV treatment and prevention',
    btnLink: 'newsItem3',
    btnText: 'More',
    href: 'highlights/LongActing',
  },
  {
    id: 4,
    date: '11/09/2022',
    img: hiImg4,
    text: 'Vuka+: a novel smartphone-based PrEP adherence support intervention for adolescent girls and young women',
    btnLink: 'newsItem4',
    btnText: 'More',
    href: 'highlights/Vuka',
  },
]

export const impact = [
  {
    id: 1,
    title: 'Multipurpose Prevention Technologies',
    text: 'CONRAD is currently developing several combination products providing for multiple indications at once, including contraception and protection against HIV and/or other STIs.',
  },
  {
    id: 2,
    title: 'Contraception',
    text: 'CONRAD has contributed critical data to approval of many safe/affordable contraceptive devices, such as the PATH Woman’s Condom, Lea’s Shield, Femcap, and SILCS diaphragm (Caya).',
  },
  {
    id: 3,
    title: 'Maternal and Neonatal Health',
    text: 'CONRAD works collaboratively with clinical researchers to investigate innovative diagnostic and therapeutic options to improve maternal and neonatal health outcomes.',
  },
  {
    id: 4,
    title: 'Women’s Reproductive Health',
    text: 'Our HCD-focused approaches enfranchise women to exercise control over their own sexual and reproductive health and improve their access to safe, affordable health products.',
  },
  {
    id: 5,
    title: 'STI Prevention',
    text: 'Our mission to improve reproductive health globally has seen CONRAD researching and developing novel microbicide delivery systems for the prevention of herpes and other STIs.',
  },
  {
    id: 6,
    title: 'HIV Prevention',
    text: 'For almost 40 years, CONRAD has served as a leader in the HIV prevention research field, advancing several cutting-edge compounds to late phase trials, such as the tenofovir gel.',
  },
]

export const gameChange = [
  {
    id: 1,
    title: 'Thought Leaders',
    text: 'Reproductive health, especially in women; HIV/STI prevention; Contraception; Preclinical & clinical product development; Drug delivery systems',
  },
  {
    id: 2,
    title: 'Ideas Incubator',
    text: 'Innovative approaches and product development based on user’s needs; R&D and proof-of-concept; Unique portfolio of drug platforms, APIs and MPTs',
  },
  {
    id: 3,
    title: 'End-to-End Expertise',
    text: 'Late discovery through early clinical testing; Contraceptive, HIV & MPT product development; Preclinical testing; Clinical trials (Safety, PK, PD, Acceptability, Effectiveness); Human-centered design; Regulatory strategy; Implementation',
  },
  {
    id: 4,
    title: 'History of Success',
    text: 'Reproductive health, especially in women; HIV/STI prevention; Contraception; Preclinical & clinical product development; Drug delivery systems',
  },
]

export const icons = [
  {
    id: '1',
    title: 'MATRIX',
    img: iconImg1,
    href: 'projects/Matrix',
  },
  {
    id: 2,
    title: 'Project Engage',
    img: iconImg2,
    href: 'projects/Engage',
  },
  {
    id: 3,
    title: 'Project UChoose',
    img: iconImg3,
    href: '/projects/Uchoose',
  },
  {
    id: 4,
    title: 'Project Horizon',
    img: iconImg4,
    href: 'projects/Horizon',
  },
  {
    id: 5,
    title: 'Past Projects',
    img: iconImg5,
    href: 'projects/Past',
  },
]

export const pubIcons = [
  {
    id: 1,
    title: 'Novel Contraceptive Technologies',
    img: pubIcon1,
    href: 'publications/novelContraceptive',
  },
  {
    id: 2,
    title: 'HIV Prevention Technologies',
    img: pubIcon2,
    href: 'publications/hivPrev',
  },
  {
    id: 3,
    title: 'Product Development',
    img: pubIcon3,
    href: 'publications/prodDev',
  },
  {
    id: 4,
    title: 'Clinical Trials',
    img: pubIcon4,
    href: 'publications/clinicTrials',
  },
  {
    id: 5,
    title: 'Adherence Monitoring and Support',
    img: pubIcon5,
    href: 'publications/monSupport',
  },
  {
    id: 6,
    title: 'HIV/STI Susceptibility',
    img: pubIcon6,
    href: 'publications/hivSti',
  },
  {
    id: 7,
    title: 'Biomarkers',
    img: pubIcon7,
    href: 'publications/bioMarkers',
  },
]

//Sponsor

export const sponsorInfo = [
  {
    id: 1,
    img: sponsorImg1,
    alt: 'Pepfar',
  },
  {
    id: 2,
    img: sponsorImg2,
    alt: 'USAID',
  },
  {
    id: 3,
    img: sponsorImg3,
    alt: 'Matrix',
  },
]

export const sponsorInfo2 = [
  {
    id: 1,
    img: sponsorImg2,
    alt: 'USAID logo',
  },
  {
    id: 2,
    img: sponsorImg4,
    alt: 'Conrad logo',
  },
  {
    id: 3,
    img: sponsorImg5,
    alt: 'EVMS logo',
  },
]
