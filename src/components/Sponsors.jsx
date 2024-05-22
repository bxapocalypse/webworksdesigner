import { sponsorInfo } from '../data'

const Sponsors = () => {
  return (
    <div className="gridWrapper">
      {sponsorInfo.map((sponsor) => {
        const { id, img, alt } = sponsor
        return (
          <div className="gridItem">
            <img id={id} src={img} alt={alt} />
          </div>
        )
      })}
    </div>
  )
}
export default Sponsors
