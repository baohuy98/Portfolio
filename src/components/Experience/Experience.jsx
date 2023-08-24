import React from 'react'
import './experience.style.scss'
import plance3 from 'src/assets/images/plance-3.png'
function Experience() {
  return (
    <div className="experience scroll-section hidden" id="experience-nav">
      <div className="experience__left">
        <div className="experience__left--image">
          <img src={plance3} alt="plance" />
        </div>
      </div>
      <div className="experience__right">
        <div className="experience__right--title">Experience</div>
        <div className="experience__right--content">
          <div className="experience__right--content_item">
            <div className="experience__right--content_item-left">
              <svg
                className="line-1 svg1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 83.28 506.81"
              >
                <polyline
                  className="cls-1"
                  points="56.62 13 74.62 77 0.62 206 82.62 290 2.62 395 56.84 496.93"
                />
                <path
                  className="cls-2"
                  d="M55.5.5c12.12,0,19.17,9.2,13.8,13s-9.2,6.91-13,6.14-13.8-1.54-13-6.14S50.13.5,55.5.5Z"
                />
                <path
                  className="cls-2"
                  d="M54.36,487c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.8-1.54-13-6.14S49,487,54.36,487Z"
                />
              </svg>
            </div>
            <div className="experience__right--content_item-right">
              <div>
                <section className="experience__right--content_item-right_title">
                  Beta Securities Incorporation.
                </section>
                <span>
                  55 Nam Kỳ Khởi Nghĩa, Phường Nguyễn Thái Bình, Quận 1, Thành
                  phố Hồ Chí Minh
                </span>
                <section className="experience__right--content_item-right_work">
                  - Intern Front-end.(8/2022-11/2022)
                </section>
                <section className="experience__right--content_item-right_work">
                  - Front-end Junior.(11/2022 - Present)
                </section>
                <br />
                <ul>
                  <li>
                    <article>Main responsibilities:</article>- Building web
                    applications with ReactJS.
                    <br />
                    <i>Website:</i>
                    <a
                      style={{ color: 'yellow' }}
                      href="https://binfo.bsi.com.vn/"
                      target="blank"
                    >
                      binfo.bsi.com.vn
                    </a>
                  </li>
                  <li>- Building APIs with NestJS.</li>
                  <li>
                    - Researching, planning and building new features for
                    website.
                  </li>
                  <li>- Researching and optimizing old code system.</li>
                  <br />
                  <li>
                    <article>Recognition and Gains:</article>-Given good
                    recognition by leader in terms of Front-end. <br />
                    -I was accepted as a full-time employee after my internship
                    .Through the process of working I learned skills such as:
                    <br />
                    <i>
                      + How to process data in real time with
                      <i style={{ color: 'yellow', fontSize: 'semibold' }}>
                        (socketIO).
                      </i>
                    </i>
                    <br />
                    <i>+ Working with RESTful API.</i>
                    <br />
                    <i>+ Build UI/UX (table, chart).</i>
                    <br />
                    <i>+ Time management, softskills,...</i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
