import tixket from 'src/assets/images/project2.png'
import petcare from 'src/assets/images/project1.png'
import elearning from 'src/assets/images/project3.png'
import binfo from 'src/assets/images/project4.jpg'
import shoppe from 'src/assets/images/project5.png'

export const projects = [

  {
    id: '1',
    name: 'B-info',
    isProject: 'Project while junioer at  Beta Securities Incorporation.',
    image: binfo,
    teamSize: 4,
    technologies: 'ReactJS, NestJS, SocketIO, Ant Design, MUI, TailwindCSS, Redux-thunk, Highcharts...',
    suchAs:
      'RESTful API, NX Library, visualizing data, market analysis, capturing business news...',
    link: 'https://binfo.bsi.com.vn/',
    newPrj: true
  },
  {
    id: '2',
    name: 'Pet-care Landing Page',
    isProject: 'The first project when started learning Front-end Developer',
    image: petcare,
    teamSize: 1,
    technologies: 'HTML/SCSS/JS, Bootstrap.',
    suchAs: 'Animations, Responsive, ...',
    link: 'https://petcare-demo.vercel.app/'
  },
  {
    id: '3',
    name: 'Tixket-booking',
    isProject: 'Project while learing ReactJS',
    image: tixket,
    teamSize: 2,
    technologies: 'ReactJS, Ant-design, TailwindCSS, Redux, ...',
    suchAs: 'Animations, Responsive, Dashboard Admin ...',
    video: 'vszKgs1l9DU',
    link: 'https://ticket-booking-dccfc.web.app/'
  },
  {
    id: '4',
    name: 'Elearning Course',
    isProject: 'Project while learing ReactJS',
    image: elearning,
    teamSize: 2,
    technologies: 'ReactJS, Ant-design, TailwindCSS, Redux, ...',
    suchAs: 'Animations, Responsive,  Dashboard Admin...',
    video: 'QGn162zs36k',
    link: 'https://elearning-course-15664.web.app/'
  },
  {
    id: '5',
    name: 'Shoppe Clone',
    isProject: 'Project while learing ReactJS with Typescript',
    image: shoppe,
    teamSize: 1,
    technologies: 'ReactJS with Typescript, i18n,TailwindCSS, Redux, ...',
    suchAs: 'Animations, Responsive, Search...',
    video: 'QGn162zs36k',
    link: 'https://shope-clone.vercel.app/'
  },


]
