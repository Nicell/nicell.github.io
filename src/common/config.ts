import { configType } from './types';

export const config: configType = {
  skills: [
    {
      label: 'Front End',
      icon: 'window',
      skillList: [
        'React',
        'CSS and SASS',
        'Vanilla JS DOM',
        'Stencil.js',
        'WebSockets',
        'UI Design'
      ]
    },
    {
      label: 'Back End',
      icon: 'server',
      skillList: [
        'Node.js Ecosystem',
        'TypeScript',
        'Golang',
        'Java',
        'SQL (MySQL/PG)',
        'ORM (Hibernate/TypeORM)'
      ]
    },
    {
      label: 'DevOps',
      icon: 'cogs',
      skillList: [
        'Debian/Ubuntu',
        'NGINX',
        'GitHub Pages',
        'GitLab',
        'Docker',
        'Cloudflare'
      ]
    }
  ],
  projects: [
    {
      title: 'HLPugs.tf',
      description: `HLPugs.tf is a captain draft pick up game creator for Team Fortress 2.
        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer.
        The current site was built using Vanilla JS, Socket.io, Node.js, and Express.
        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.
        The site has served over 5,000 games to over 1,000 users.
        Today the site is still used every day by TF2 community members in North America and Europe.`,
      image: 'hlpugs',
      github: 'https://github.com/HLPugs/HLPugs',
      link: 'https://hlpugs.tf',
      stack: ['TypeScript', 'React', 'WebSockets', 'Express'],
      direction: 'left'
    },
    {
      title: 'Where to Live',
      description: `Where to Live is a fun side project of parsing data from NOAA using Golang and displaying it using HTML5 Canvas and Stencil.js.
        The outcome of this learning experience is an automatically generated webpage displaying a visual representation of the best places to live based on weather.
        This project was inspired by Kelly Norton's "Pleasant Places", but extended with the addition of bad days being taken into account, which improved our results.
        HTML5 canvas was used instead of DOM or SVG for the increased performance because we render over 3,000 elements.
        The canvas element even has controls that modify the pan and zoom of the map efficiently.`,
      image: 'wheretolive',
      github: 'https://github.com/Nicell/where-to-live',
      link: 'https://nick.winans.codes/where-to-live',
      stack: ['TypeScript', 'Golang', 'Stencil.js', 'HTML5 Canvas', 'CircleCI'],
      direction: 'right'
    },
    {
      title: 'Let\'s Tutor',
      description: `Let's Tutor is a peer tutoring solution for schools.
        It offers a simple way to manage peer tutoring schedules and writing submissions.
        Tutors are able to easily view, claim, and edit submissions sent by other students at school.
        The site is built using React and Websockets, and it's a Progressive Web App.
        This project was piloted at my school last year with great success.
        Currently this project is in the process of an enhancement.
        React Native and a new admin dashboard built with React are on the list of changes.`,
      image: 'letstutor',
      link: 'https://letstutor.org',
      stack: ['JavaScript', 'React', 'Express'],
      direction: 'left'
    },
    {
      title: 'CarMon',
      description: `CarMon was created for a capstone course in my senior year of high school.
        Our team created a module that sits in your car and measures temperature, CO2 levels, and GPS location.
        This information could then be used to see whether someone is in the car at high temperatures with a location attached.
        The module in the car can connect to the partnering mobile app to sync all of the data via Bluetooth to be visualized.
        Python was used to write the program that took the raw data from the sensors and recorded it to a SQLite database,
        and JavaScript was used to transmit the data via Bluetooth and write the mobile app in React Native.`,
      image: 'carmon',
      stack: ['JavaScript', 'Python', 'Bluetooth'],
      direction: 'right'
    }
  ],
  links: [
    {
      icon: {
        prefix: 'fab',
        iconName: 'github'
      },
      title: 'GitHub',
      link: 'https://github.com/Nicell'
    },
    {
      icon: {
        prefix: 'fas',
        iconName: 'envelope'
      },
      title: 'Email',
      link: 'mailto:nick@winans.codes'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'linkedin'
      },
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nick-winans/'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'twitch'
      },
      title: 'Twitch',
      link: 'https://www.twitch.tv/nicell'
    }
  ]
}
