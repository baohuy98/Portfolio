import React from 'react'
import './header.style.scss'
import CV from 'src/assets/images/Le-Nam-Bao-Huy_Front-end.pdf'
// import user from 'src/assets/images/user.png'

function Header() {
  return (
    <div className="header scroll-section" id="header-nav">

      <div className="header__left">
        <div className="header__left--content">
          <div className="header__left--content--title">Hello, I'm Huy</div>
          <article className="header__left--content--fe">
            Front-End Developer
          </article>
          <section className="header__left--content--button">
            <a href={CV} download>
              <article className="btn btn__download cursor_small">
                Download CV
              </article>
            </a>
            <a href="#contact-nav" className="btn btn__let-talk cursor_small">
              Let's Talk
            </a>
          </section>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right--image"></div>
      </div>
    </div>
  )
}

export default Header
