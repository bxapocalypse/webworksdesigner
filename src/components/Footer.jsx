import logo from '../images/CONRAD-Logo-Final-Color-Arch.png'
import { footerLinks } from '../data'

const Footer = () => {
  return (
    <>
      <div className="section-divider__four"></div>

      <footer className="footer" id="site-footer">
        <div className="footer__logo">
          <a href="index.html">
            <img className="footer__logo__img" src={logo} alt="Conrad logo" />
          </a>
        </div>

        <nav className="footer__nav">
          <ul className="footer__nav__ul">
            {footerLinks.map((link) => {
              const { id, href, text } = link
              return (
                <li className="footer__nav__ul__li" key={id}>
                  <a href={href}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* <!--footer-nav ends--> */}

        <div className="footer__info__top">
          <p>
            Email:{' '}
            <a href="info@conrad.org" aria-label="Click to email">
              info@conrad.org
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:757-446-5600"
              itemProp="tel"
              aria-label="Click to call"
            >
              757.446.5600
            </a>
          </p>
        </div>
        <hr />

        <div className="footer__info__bottom">
          <p>
            Copyright © <span className="myYear"></span> CONRAD. All Rights
            Reserved.
          </p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </>
  )
}
export default Footer
