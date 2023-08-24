import React from 'react'
import './about.style.scss'
import plance1 from 'src/assets/images/plance-1.png'
function About() {
  return (
    <div className="about scroll-section hidden" id="about-nav">
      <div className="about__left">
        <div className="about__left--image">
          <img src={plance1} alt="plance" />
        </div>
      </div>
      <div className="about__right">
        <section>
          <div className="about__right--title">About Me</div>
          <div className="about__right--content">
            <div>
              Good day, everyone! I'm Huy Le, I'm 25 years old and I'm
              from HCM city. I'm Fresher Front-end Developer. I have a one
              year experience of working as a web developer at HCMC.
            </div>
            <div>
              I'm often praised for my creativity and independent working
              skills. I always put my heart and soul into every single website
              that I develop. I guess that's all I have to share about myself.
              Thank you for reading!
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
