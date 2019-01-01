import { configType } from './types';

export const config: configType = {
  skills: [
    {
      label: 'Front End',
      icon: 'window',
      description: '',
      skillList: [
        'React',
        'CSS and SASS',
        'Vanilla JS DOM interactions',
        'Handlebars',
        'Stencil.js',
        'jQuery'
      ]
    },
    {
      label: 'Back End',
      icon: 'server',
      description: '',
      skillList: [
        'Node.js',
        'Express',
        'TypeScript',
        'Redis',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Websockets/Socket.io'
      ]
    },
    {
      label: 'DevOps',
      icon: 'cogs',
      description: '',
      skillList: [
        'Debian/Ubuntu',
        'NGINX',
        'AWS',
        'Vultr',
        'GitHub Pages',
        'Cloudflare'
      ]
    }
  ],
  projects: [
    {
      title: 'HLPugs.tf',
      description: `HLPugs.tf is captain draft pick up game creator for Team Fortress 2. 
        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer. 
        The current site was built using Vanilla JS, Socket.io, Node.js, and Express. 
        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.
        The site has served nearly 5,000 games to over a 1,000 users. 
        Today the site is still used every day by TF2 community members in North America and Europe. `,
      image: 'hlpugs',
      direction: 'left'
    },
    {
      title: 'Let\'s Tutor',
      description: `Let's Tutor is a peer tutoring solution for schools. 
        It offers a simple way to manage peer tutoring schedules and writing submissions. 
        Tutors are able to easily view, claim, and edit submissions sent by other students at school. 
        The site is built using React and Websockets, and it's a Progressive Web App. 
        Currently this project is being piloted at my school, and I will be looking to expand it's reach next year.`,
      image: 'letstutor',
      direction: 'right'
    }
  ]
}