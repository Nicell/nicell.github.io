/*! Built with http://stenciljs.com */
App.loadBundle("zmq7c9uo",["exports"],function(e){var t=window.App.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"app-about"},t("app-anim",null,t("h1",null,"nick.winans.codes")),t("app-anim",{delay:200},t("app-img",{alt:"Me",src:"me",type:"jpg"})),t("app-anim",{delay:400},t("p",null,"Hi, I'm Nick. I'm a high school student fascinated by the web. Since my first website I made in 2012, I've been continually exploring all ends of web development. Along the way I've met great people, made meaningful projects, and learned an unbelievable amount.")),t("a",{target:"_blank",href:"mailto:nick@winans.codes"},"Contact Me"))},Object.defineProperty(e,"is",{get:function(){return"app-about"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-about.sc-app-about{height:90vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-bottom:20vh;-webkit-box-sizing:border-box;box-sizing:border-box}h1.sc-app-about{font-family:Inconsolata,monospace}img.sc-app-about{width:200px;height:200px;border-radius:50%;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark)}p.sc-app-about{opacity:var(--text-secondary);max-width:500px;text-align:center}a.sc-app-about{border:solid 2px var(--primary);border-radius:999px;padding:10px 20px;background:var(--background);color:#fff;-webkit-box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);position:fixed;top:20px;right:20px;font-family:Iconsolata,monospace;cursor:pointer;outline:none;overflow:hidden;text-decoration:none;font-size:16px;z-index:2}a.sc-app-about:before{display:block;position:absolute;top:0;content:\"\";width:120%;height:100%;background:var(--primary);z-index:-1;-webkit-transform:skewX(30deg) translateX(-125%);transform:skewX(30deg) translateX(-125%);-webkit-transition:all .2s ease;transition:all .2s ease}a.sc-app-about:hover:before{-webkit-transform:skewX(30deg) translateX(-15%);transform:skewX(30deg) translateX(-15%)}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.render=function(){return t("footer",{class:"app-footer"},t("footer",null,t("p",null,"nick.winans.codes © ",(new Date).getFullYear()),t("p",null,"powered by ",t("a",{target:"_blank",href:"https://stenciljs.com"},"Stencil.js")," and ",t("a",{target:"blank",href:"https://github.com/Nicell/nicell.github.io"},"GitHub Pages"))))},Object.defineProperty(e,"is",{get:function(){return"app-footer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),i={skills:[{label:"Front End",icon:"window",description:"",skillList:["React","CSS and SASS","Vanilla JS DOM interactions","Handlebars","Stencil.js","jQuery"]},{label:"Back End",icon:"server",description:"",skillList:["Node.js","Express","TypeScript","Redis","MySQL","MongoDB","PostgreSQL","Websockets/Socket.io"]},{label:"DevOps",icon:"cogs",description:"",skillList:["Debian/Ubuntu","NGINX","AWS","Vultr","GitHub Pages","Cloudflare"]}],projects:[{title:"HLPugs.tf",description:"HLPugs.tf is captain draft pick up game creator for Team Fortress 2. \n        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer. \n        The current site was built using Vanilla JS, Socket.io, Node.js, and Express. \n        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.\n        The site has served nearly 5,000 games to over a 1,000 users. \n        Today the site is still used every day by TF2 community members in North America and Europe. ",image:"hlpugs",direction:"left"},{title:"Let's Tutor",description:"Let's Tutor is a peer tutoring solution for schools. \n        It offers a simple way to manage peer tutoring schedules and writing submissions. \n        Tutors are able to easily view, claim, and edit submissions sent by other students at school. \n        The site is built using React and Websockets, and it's a Progressive Web App. \n        Currently this project is being piloted at my school, and I will be looking to expand it's reach next year.",image:"letstutor",direction:"right"}]},o=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"app-home"},t("app-section",null,t("app-about",null)),t("app-section",null,t("app-skills",{skills:i.skills})),i.projects.map(function(e){return t("app-section",null,t("app-project",{config:e}))}),t("app-section",null,t("app-footer",null)))},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-home.sc-app-home{background:var(--foreground-light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden}app-section.sc-app-home:nth-child(odd){background:var(--background);color:#fff}app-section.sc-app-home:first-child{background-color:#363c4e;background-image:url(/assets/img/tile.svg);background-size:200px}a.sc-app-home{color:var(--primary)}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"app-section"},t("div",{class:"wrapper"},t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"app-section"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-section.sc-app-section{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.wrapper.sc-app-section{max-width:960px;-ms-flex-positive:1;flex-grow:1;padding:0 20px}"},enumerable:!0,configurable:!0}),e}();e.AppAbout=n,e.AppFooter=r,e.AppHome=o,e.AppSection=a,Object.defineProperty(e,"__esModule",{value:!0})});