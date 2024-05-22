import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.svg'
import xbtn from '../images/x.svg'
import { subPageLinks } from '../data'

const subNavbar = () => {
  return (
    <>
      <nav className="header__nav">
        {/* <form action="https://search.evms.edu/s/search.html" method="GET" id="form-search" className="header__nav__search">
	            <input type="hidden" name="collection" value="evms-search">

	            

	            <input type="hidden" name="profile" value="_default_preview">

	            <input required name="query" id="query" title="search query" type="text" value="" accesskey="query" placeholder="Search Female invenntors & help;">
	            <button type="submit">Search</button>

                <script>
      								const f = document.getElementById('form-search');
      								const q = document.getElementById('query');
      								const funnelback = 'https://search.evms.edu/s/search.html?collection=evms-search&query=';
      								const restUrl = '&collection=evms-search&profile=_default';

      								function submitted(event) {
        								event.preventDefault();
        								const url = funnelback + q.value + restUrl;
        								const win = window.open(url, '_blank');
        								win.focus();
      								}

      								f.addEventListener('submit', submitted);
    							</script>


            </form> */}

        <div className="header__nav__logo-container" id="logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Conrad logo" />
          </Link>
        </div>
        {/* <!--header__nav__logo-container ends--> */}

        <div className="hamburger-menu">
          <img
            className="hamburger"
            src={hamburger}
            alt="hamburger menu"
            aria-label="click to open mobile menu"
          />
          <img
            className="xBtn"
            src={xbtn}
            alt="hamburger menu"
            aria-label="click to close mobile menu"
          />
        </div>
        <ul className="header__nav__ul">
          {subPageLinks.map((link) => {
            return (
              <li className="header__nav__ul__li" key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            )
          })}
        </ul>
        <div className="header__main__searchformContainer">
          {/* <!--Search Bar Button--> */}
          <button
            className="search-bar__button"
            id="btn--search"
            aria-label="Open search bar"
            tabIndex="0"
            type="submit"
            title="Submit search"
          >
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </button>
          {/* <!--Search Bar Button ends--> */}

          <div className="header__main__searchformBtnContainer">
            <form
              id="form__search"
              className="header__main__searchform"
              name="form-search"
              role="search"
              method="get"
            >
              <label className="sr-only" htmlFor="search">
                Search
              </label>

              <button
                className="header__main__searchformBtnInner"
                id="btn--search"
                aria-label="Submit Search"
                tabIndex="0"
                type="submit"
                title="Submit search"
              >
                <span className="sr-only">Submit search</span>
              </button>

              <input
                id="query"
                className="header__main__searchformInput"
                name="q"
                type="search"
                placeholder="Search"
                // aria-expanded="true"
              />

              {/* <script>
                        const f = document.getElementById('form__search')
                        const q = document.getElementById('query')
                        const funnelback =
                          'https://search.evms.edu/s/search.html?collection=evms-search&profile=_default&query=medical+group+%2B+'
                        const restUrl =
                          '&collection=evms-search&profile=_default'

                        function submitted(event) {
                          event.preventDefault()
                          const url = funnelback + q.value + restUrl
                          const win = window.open(url, '_blank')
                          win.focus()
                        }

                        f.addEventListener('submit', submitted)
                      </script> */}

              <button
                className="header__main__searchformBtn btn--close--sm"
                id="btn--close--search"
                aria-label="Close search"
                type="button"
                tabIndex="0"
                title="Close search"
              >
                ×<span className="sr-only"> Close search </span>
              </button>
            </form>
          </div>
          {/* <!--Search Form ends--> */}
        </div>
      </nav>
    </>
  )
}
export default subNavbar
