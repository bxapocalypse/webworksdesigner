import { highLights } from '../data'

const HighlightsNav = () => {
  return (
    <>
      <section className="news-container">
        {highLights.map((highLight) => {
          const { id, date, text, img, href } = highLight
          return (
            <div className="generalContent__news" key={id}>
              <div className="generalContent__news__date">{date}</div>
              <div class="generalContent__news__title">
                <a href={href}>{text}</a>
              </div>
              <div class="generalContent__news__img-lrg">
                <a href={href}>
                  <img src={img} alt={text} />
                </a>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
export default HighlightsNav
