import { pubIcons } from '../data'

const PubIcons = () => {
  return (
    <section className="icons__section">
      {pubIcons.map((pubIcon) => {
        const { id, title, img, href } = pubIcon
        return (
          <div className="icons__section__box" key={id}>
            <a href={href}>
              <img className="icons__section__boxImg" src={img} alt={title} />
            </a>
            <span className="icons__section__boxContent">
              <p>{title}</p>
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default PubIcons
