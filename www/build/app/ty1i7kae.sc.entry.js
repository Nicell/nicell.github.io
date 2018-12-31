/*! Built with http://stenciljs.com */
const{h:e}=window.App;class t{render(){return e("div",{class:"app-about"},e("h1",null,"nick.winans.codes"),e("app-img",{alt:"Me",src:"me",type:"jpg"}),e("p",null,"Hi, I'm Nick. I'm a high school student fascinated by the web. Since my first website I made in 2012, I've been continually exploring all ends of web development. Along the way I've met great people, made meaningful projects, and learned an unbelievable amount."),e("a",{href:"mailto:nick@winans.codes"},"Contact Me"))}static get is(){return"app-about"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0}}}static get style(){return".app-about.sc-app-about{height:90vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-bottom:20vh;-webkit-box-sizing:border-box;box-sizing:border-box}h1.sc-app-about{font-family:Inconsolata,monospace}img.sc-app-about{width:200px;height:200px;border-radius:50%;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark)}p.sc-app-about{opacity:var(--text-secondary);max-width:500px;text-align:center}a.sc-app-about{border:solid 2px var(--primary);border-radius:999px;padding:10px 20px;background:var(--background);color:#fff;-webkit-box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);position:fixed;top:20px;right:20px;font-family:Iconsolata,monospace;cursor:pointer;outline:none;overflow:hidden;text-decoration:none;font-size:16px;z-index:2}a.sc-app-about:before{display:block;position:absolute;top:0;content:\"\";width:120%;height:100%;background:var(--primary);z-index:-1;-webkit-transform:skewX(30deg) translateX(-125%);transform:skewX(30deg) translateX(-125%);-webkit-transition:all .2s ease;transition:all .2s ease}a.sc-app-about:hover:before{-webkit-transform:skewX(30deg) translateX(-15%);transform:skewX(30deg) translateX(-15%)}"}}class s{render(){return e("footer",{class:"app-footer"},e("footer",null,e("p",null,"nick.winans.codes © ",(new Date).getFullYear()),e("p",null,"powered by ",e("a",{target:"blank",href:"https://stenciljs.com"},"Stencil.js")," and ",e("a",{target:"blank",href:"https://github.com/Nicell/nicell.github.io"},"GitHub Pages"))))}static get is(){return"app-footer"}static get style(){return""}}const i={skills:[{label:"Front End",icon:"window",description:"",skillList:["React","CSS and SASS","Vanilla JS DOM interactions","Handlebars","Stencil.js","jQuery"]},{label:"Back End",icon:"server",description:"",skillList:["Node.js","Express","TypeScript","Redis","MySQL","MongoDB","PostgreSQL","Websockets/Socket.io"]},{label:"DevOps",icon:"cogs",description:"",skillList:["Debian/Ubuntu","NGINX","AWS","Vultr","GitHub Pages","Cloudflare"]}],projects:[{title:"HLPugs.tf",description:"HLPugs.tf is captain draft pick up game creator for Team Fortress 2. \n        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer. \n        The current site was built using Vanilla JS, Socket.io, Node.js, and Express. \n        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.\n        The site has served nearly 5,000 games to over a 1,000 users. \n        Today the site is still used every day by TF2 community members in North America and Europe. ",image:"hlpugs",direction:"left"},{title:"Let's Tutor",description:"Let's Tutor is a peer tutoring solution for schools. \n        It offers a simple way to manage peer tutoring schedules and writing submissions. \n        Tutors are able to easily view, claim, and edit submissions sent by other students at school. \n        The site is built using React and Websockets, and it's is a Progressive Web App. \n        Currently this project is being piloted at my school, and I will be looking to expand it's reach next year.",image:"letstutor",direction:"right"}]};class a{render(){return e("div",{class:"app-home"},e("app-section",null,e("app-about",null)),e("app-section",null,e("app-skills",{skills:i.skills})),i.projects.map(t=>e("app-section",null,e("app-project",{config:t}))),e("app-section",null,e("app-footer",null)))}static get is(){return"app-home"}static get encapsulation(){return"shadow"}static get style(){return".app-home.sc-app-home{background:var(--foreground-light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden}app-section.sc-app-home:nth-child(odd){background:var(--background);color:#fff}a.sc-app-home{color:var(--primary)}"}}class n{render(){return e("div",{class:"app-section"},e("div",{class:"wrapper"},e("slot",null)))}static get is(){return"app-section"}static get encapsulation(){return"shadow"}static get style(){return".app-section.sc-app-section{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.wrapper.sc-app-section{max-width:960px;-ms-flex-positive:1;flex-grow:1;padding:0 20px}"}}export{t as AppAbout,s as AppFooter,a as AppHome,n as AppSection};