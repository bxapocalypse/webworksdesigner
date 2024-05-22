import { icons } from '../data'

const Icons = () => {
  return (
    <section className="icons__section">
      {icons.map((icon) => {
        const { id, title, img, href } = icon
        return (
          <div class="icons__section__box" key={id}>
            <a href={href}>
              <img className="icons__section__boxImg" src={img} alt={title} />
            </a>
            <span class="icons__section__boxContent">
              <p>{title}</p>
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default Icons
