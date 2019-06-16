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
        'Handlebars',
        'Stencil.js',
        'jQuery',
        'GSAP Tween'
      ]
    },
    {
      label: 'Back End',
      icon: 'server',
      skillList: [
        'Node.js',
        'Express',
        'TypeScript',
        'Redis',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'WebSockets'
      ]
    },
    {
      label: 'DevOps',
      icon: 'cogs',
      skillList: [
        'Debian/Ubuntu',
        'NGINX',
        'AWS',
        'Vultr',
        'GitHub Pages',
        'Cloudflare',
        'Docker',
        'GitLab'
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
        The site has served over 5,000 games to over a 1,000 users.
        Today the site is still used every day by TF2 community members in North America and Europe.`,
      image: 'hlpugs',
      direction: 'left'
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
      direction: 'right'
    }
  ],
  links: [
    {
      icon: {
        prefix: 'fab',
        iconName: 'github'
      },
      link: 'https://github.com/Nicell'
    },
    {
      icon: {
        prefix: 'fas',
        iconName: 'envelope'
      },
      link: 'mailto:nick@winans.codes'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'reddit'
      },
      link: 'https://www.reddit.com/user/Nicell'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'twitch'
      },
      link: 'https://www.twitch.tv/nicell'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'steam'
      },
      link: 'https://steamcommunity.com/id/nicell_'
    },
    {
      icon: {
        prefix: 'fab',
        iconName: 'linkedin'
      },
      link: 'https://www.linkedin.com/in/nick-winans-417395173/'
    }
  ]
}
