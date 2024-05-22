import React, { useState, useEffect } from 'react'

const Backtotop = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={scrolled ? 'scrolled back2top' : 'back2top'}>
      <a href="#logo">
        &#8593;
        <br />
        Back to top
      </a>
    </div>
  )
}
export default Backtotop
