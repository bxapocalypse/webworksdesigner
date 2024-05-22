import { infoBoxes } from '../data'

const Info = () => {
  return (
    <section className="info-boxes" id="info">
      {infoBoxes.map((box) => {
        const { id, img, title, text } = box
        return (
          <div className="info-boxes__box" key={id}>
            <img
              className="info-boxes__box__img"
              src={img}
              alt="lady talking to a group"
            />
            <span className="info-boxes__box__title">{title}</span>
            <div className="info-boxes__box__txt">{text}</div>
          </div>
        )
      })}
    </section>
  )
}
export default Info
