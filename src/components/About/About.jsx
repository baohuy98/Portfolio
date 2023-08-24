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
      <div className="about__right" style={{ display: 'flex', flexDirection: "column", justifyContent: "center", marginBottom: '400px', marginLeft: '200px' }}>
        <section>
          <div className="about__right--title">About Me</div>
          <div className="about__right--content">
            <div>
              Good day, everyone! I'm Huy Le, a 25-year-old man from HCM city.
              I'm a Fresher Front-end Developer with 1-year experience of
              working as a web developer at HCMC.
            </div>
            <div>
              I'm the creative force behind every pixel on the web. With a
              passion for crafting unique websites, I pour my heart and soul
              into every project. That's a glimpse of what makes me tick. Thanks
              for taking the time to learn a bit about me!
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
