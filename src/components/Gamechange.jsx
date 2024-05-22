import Title from './Title'
import { gameChange } from '../data'

const Gamechange = () => {
  return (
    <>
      <div className="section-divider__three"></div>

      <section className="game-change" id="game-change">
        <h3 className="game-change__title">
          <Title title="Your Partner in Game-Changing Global Health" />
        </h3>
        <div className="game-change__boxes">
          {gameChange.map((gamer) => {
            const { id, title, text } = gamer
            return (
              <div className="game-change__boxes__box" key={id}>
                <span className="game-change__boxes__box-title">{title}</span>
                <div className="game-change__boxes__box-txt">{text}</div>
              </div>
            )
          })}
        </div>

        {/* <!-- <div className="section-divider"></div> --> */}
      </section>
    </>
  )
}
export default Gamechange
