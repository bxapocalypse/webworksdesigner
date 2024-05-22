import Title from './Title'
import { highLights } from '../data'

const Highlights = () => {
  return (
    <div>
      <h1 className="section-header">
        <Title title="Highlights" />
      </h1>
      <section className="highlights" id="highlights">
        {highLights.map((highlight) => {
          const { id, img, text, btnLink, btnText } = highlight
          return (
            <div className="highlights__highlight" key={id}>
              <img
                src={img}
                className="highlights__highlight__img"
                alt="First-in-Class Intravaginal Ring containing Tenofovir and Levonorgestrel for prevention of HIV and unintended pregnancy "
              />
              <span className="highlights__highlight__title">{text}</span>

              <a
                className="highlights_highlight__btn"
                href={btnLink}
                target="_blank"
                rel="noreferrer"
              >
                {btnText} <span className="newsbtnarrow"></span>
              </a>
            </div>
          )
        })}
      </section>
    </div>
  )
}
export default Highlights
