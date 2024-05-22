import impactImg from '../images/areas-of-impact-bg.png'
import { impact } from '../data'
import React, { useState } from 'react'

const Impact = () => {
  const [impactState, setImpactState] = useState(null)
  return (
    <>
      <h1 class="section-header">Areas of Impact</h1>
      <section className="impact" id="impact">
        <div className="impact-graphic">
          {impact.map((imp, index) => {
            const { id, title, text } = imp
            return (
              <div
                className="impact__point__container"
                key={id}
                onMouseOver={() => setImpactState(index)}
                onMouseOut={() => setImpactState(null)}
              >
                <span className="impact__point">{title}</span>
                <div
                  className={
                    impactState === index
                      ? 'impact__point__bubble dropNav'
                      : 'impact__point__bubble'
                  }
                  aria-label="hover to see description"
                >
                  {text}
                </div>
              </div>
            )
          })}

          <img
            className="impact-graphic__img"
            src={impactImg}
            alt="Our areas of Impact"
          />

          <img
            className="impact-graphic__img__mobile"
            src="images/conrad-graphic.png"
            alt="Our areas of Impact"
          />
        </div>
      </section>
    </>
  )
}
export default Impact
