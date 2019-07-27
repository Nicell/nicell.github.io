import{r as t,h as e,g as i,c as s,i as n}from"./p-a6a7066f.js";class a{constructor(e){t(this,e)}render(){return e("div",{class:"app-about"},e("nice-anim",{"animation-distance":"100%"},e("h1",null,"nick.winans.codes")),e("nice-anim",{delay:100},e("app-img",{alt:"Me",src:"me",type:"jpg"})),e("nice-anim",{delay:200},e("p",{class:"hi"},e("span",null,"I'm Nick."),e("span",null,"I design and build web apps.")),e("p",null,e("span",null,"People call me Nicell online.")),e("p",null,"I'm constantly learning, so I can refine my user interfaces, make my code easier to maintain, and optimize my deployments."),e("p",null,"You can find some of my skills and projects here.")),e("br",null),e("nice-anim",{delay:300,"animation-distance":"150%"},e("a",{class:"blog",href:"blog"},"Visit My Blog")),e("br",null),e("nice-anim",{delay:350,"animation-distance":"100%"},e("div",{class:"links"},this.config.map(t=>e("a",{target:"_blank",rel:"noopener",title:t.title,href:t.link},e("app-icon",{icon:t.icon}))))),e("a",{class:"contactMe",target:"_blank",href:"mailto:nick@winans.codes"},e("app-icon",{icon:{prefix:"far",iconName:"envelope"}}),e("span",null,"Contact Me")))}static get style(){return".app-about{min-height:90vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-bottom:10vh;-webkit-box-sizing:border-box;box-sizing:border-box}h1{margin-top:20px;font-family:Inconsolata,monospace}img{width:200px;height:200px;border-radius:50%;-webkit-box-shadow:0 4px 30px var(--shadow);box-shadow:0 4px 30px var(--shadow);border:solid 4px var(--shadow)}p{opacity:var(--text-secondary);max-width:500px;line-height:1.25;font-size:1.125em;text-align:center;text-shadow:0 2px 4px var(--shadow)}.hi{font-size:1.5em;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.hi>p{white-space:nowrap;-ms-flex-negative:0;flex-shrink:0}.hi span{margin:0 5px}.links{display:-ms-flexbox;display:flex;margin:20px 0}.links a{font-size:1.75em;color:#fff;opacity:var(--text-secondary);-webkit-transition:all .3s ease;transition:all .3s ease;margin:0 10px}.links a:hover{opacity:1}.contactMe{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;border:solid 2px var(--primary);border-radius:999px;padding:10px 15px;background:var(--background);color:#fff;-webkit-box-shadow:0 2px 15px var(--shadow);box-shadow:0 2px 15px var(--shadow);position:fixed;top:30px;right:30px;font-family:Iconsolata,monospace;cursor:pointer;outline:none;overflow:hidden;text-decoration:none;font-size:16px;z-index:2}.contactMe,.contactMe:before{-webkit-transition:all .2s ease;transition:all .2s ease}.contactMe:before{display:block;position:absolute;top:0;content:\"\";width:120%;height:100%;background:var(--primary);z-index:-1;-webkit-transform:skewX(30deg) translateX(-130%);transform:skewX(30deg) translateX(-130%)}.contactMe:hover:before{-webkit-transform:skewX(30deg) translateX(-15%);transform:skewX(30deg) translateX(-15%)}.contactMe>app-icon{font-size:20px;padding-right:10px}.contactMe>span{white-space:nowrap;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.blog{border:solid 2px var(--background-light);border-radius:999px;padding:10px 15px;margin:10px;background:var(--background);color:#fff;-webkit-box-shadow:0 2px 15px var(--shadow);box-shadow:0 2px 15px var(--shadow);font-family:Iconsolata,monospace;cursor:pointer;outline:none;overflow:hidden;text-decoration:none;font-size:16px;-webkit-transition:all .2s ease;transition:all .2s ease}.blog:hover{border-color:var(--primary)}\@media only screen and (max-width:768px){.contactMe{top:auto;padding:10px 12px 10px 11px;bottom:15px;right:15px}.contactMe>span{opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease;max-width:0}.contactMe:hover>span{max-width:100px;opacity:1}.contactMe>app-icon{padding-right:0}.contactMe:hover>app-icon{padding-right:10px}}"}}class r{constructor(e){t(this,e)}render(){return e("div",{class:`app-browser-preview ${this.direction}`},e("div",{class:"titlebar"},e("div",{class:"button red"}),e("div",{class:"button yellow"}),e("div",{class:"button green"})),e("app-img",{alt:`${this.site} preview`,src:`preview-${this.site}`,type:"png"}))}get el(){return i(this)}static get style(){return".app-browser-preview{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:solid 2px var(--background-dark);border-radius:8px;overflow:hidden;height:400px;width:600px;margin:30px;-webkit-box-shadow:0 4px 30px var(--shadow);box-shadow:0 4px 30px var(--shadow);background:var(--background);-ms-flex-negative:1;flex-shrink:1}.left.app-browser-preview{margin-left:-250px}.right.app-browser-preview{margin-right:-250px}.titlebar{padding:10px;background:var(--background);display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 5px var(--shadow);box-shadow:0 1px 5px var(--shadow);z-index:1;border-bottom:solid 2px var(--background-dark)}.button{height:10px;width:10px;border-radius:7px;margin-right:8px}.red{background:#ff3d3d}.yellow{background:#ffcf3d}.green{background:#3dff5e}app-img{background:#fff}app-img,img{width:600px;height:370px}.loading{opacity:0}\@media only screen and (max-width:768px){.left.app-browser-preview{margin-left:30px;margin-right:-250px}}"}}class l{constructor(e){t(this,e)}render(){return e("footer",{class:"app-footer"},e("footer",null,e("p",null,"nick.winans.codes © ",(new Date).getFullYear()),e("p",null,"powered by ",e("a",{target:"_blank",rel:"noopener",href:"https://stenciljs.com"},"Stencil.js")," and ",e("a",{target:"blank",rel:"noopener",href:"https://github.com/Nicell/nicell.github.io"},"GitHub Pages"))))}static get style(){return""}}const o={skills:[{label:"Front End",icon:"window",skillList:["React","CSS and SASS","Vanilla JS DOM","Handlebars","Stencil.js","jQuery","GSAP Tween"]},{label:"Back End",icon:"server",skillList:["Node.js","Express","TypeScript","Redis","MySQL","MongoDB","PostgreSQL","WebSockets"]},{label:"DevOps",icon:"cogs",skillList:["Debian/Ubuntu","NGINX","AWS","Vultr","GitHub Pages","Cloudflare","Docker","GitLab"]}],projects:[{title:"HLPugs.tf",description:"HLPugs.tf is a captain draft pick up game creator for Team Fortress 2.\n        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer.\n        The current site was built using Vanilla JS, Socket.io, Node.js, and Express.\n        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.\n        The site has served over 5,000 games to over 1,000 users.\n        Today the site is still used every day by TF2 community members in North America and Europe.",image:"hlpugs",direction:"left"},{title:"Let's Tutor",description:"Let's Tutor is a peer tutoring solution for schools.\n        It offers a simple way to manage peer tutoring schedules and writing submissions.\n        Tutors are able to easily view, claim, and edit submissions sent by other students at school.\n        The site is built using React and Websockets, and it's a Progressive Web App.\n        This project was piloted at my school last year with great success.\n        Currently this project is in the process of an enhancement.\n        React Native and a new admin dashboard built with React are on the list of changes.",image:"letstutor",direction:"right"}],links:[{icon:{prefix:"fab",iconName:"github"},title:"GitHub",link:"https://github.com/Nicell"},{icon:{prefix:"fas",iconName:"envelope"},title:"Email",link:"mailto:nick@winans.codes"},{icon:{prefix:"fab",iconName:"reddit"},title:"Reddit",link:"https://www.reddit.com/user/Nicell"},{icon:{prefix:"fab",iconName:"twitch"},title:"Twitch",link:"https://www.twitch.tv/nicell"},{icon:{prefix:"fab",iconName:"steam"},title:"Steam",link:"https://steamcommunity.com/id/nicell_"},{icon:{prefix:"fab",iconName:"linkedin"},title:"LinkedIn",link:"https://www.linkedin.com/in/nick-winans-417395173/"}]};class c{constructor(e){t(this,e)}render(){return e("div",{class:"app-home"},e("app-section",null,e("app-about",{config:o.links})),e("app-section",null,e("app-skills",{skills:o.skills})),o.projects.map(t=>e("app-section",null,e("app-project",{config:t}))),e("app-section",null,e("app-footer",null)),e("app-update",null))}static get style(){return".app-home{background:var(--foreground-light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden}app-section:nth-child(odd){background:var(--background);color:#fff}app-section:first-child{background-image:url(/assets/img/tile.svg);background-size:200px}a{color:var(--text-link)}"}}s.autoAddCss=!1;class p{constructor(e){t(this,e)}render(){const t=n("object"==typeof this.icon?this.icon:{prefix:"fal",iconName:this.icon});if(!t)return void console.error(`Icon not found! Icon: ${"object"==typeof this.icon?`${this.icon.prefix}.${this.icon.iconName}`:`fal.${this.icon}`}`);const i=t.html[0];return e("span",{class:`app-icon ${this.class}`,ref:t=>t.innerHTML=i})}static get style(){return".app-icon{display:contents}.svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}"}}class u{constructor(e){t(this,e),this.handleImgLoad=this.handleImgLoad.bind(this)}handleImgLoad(){this.el.querySelector("img").classList.remove("loading")}render(){return e("picture",{class:"app-img"},e("source",{srcSet:`/assets/img/${this.src}.webp`,type:"image/webp"}),e("source",{srcSet:`/assets/img/${this.src}.${this.type}`,type:`image/${"jpg"===this.type?"jpeg":"png"}`}),e("img",{onLoad:this.handleImgLoad,class:"loading",alt:this.alt,src:`/assets/img/${this.src}.${this.type}`}))}get el(){return i(this)}static get style(){return"img{-webkit-transition:all .2s ease;transition:all .2s ease}.loading{opacity:0}"}}class h{constructor(e){t(this,e)}render(){const t="right"===this.config.direction||window.innerWidth<=768?"left":"right";return e("div",{class:`app-project ${this.config.direction}`},e("nice-anim",{direction:t,duration:1e3,"animation-distance":"100%"},e("app-browser-preview",{site:this.config.image,direction:this.config.direction})),e("section",null,e("nice-anim",{delay:200,"animation-distance":"100%"},e("h1",null,this.config.title)),e("nice-anim",{delay:300},e("p",null,this.config.description))))}static get style(){return".app-project{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.right{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:start;align-items:flex-start}h1{font-family:Inconsolata,monospace}section{-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}p{line-height:1.5;font-size:1.125em;text-indent:2em;opacity:var(--text-secondary)}\@media only screen and (max-width:768px){.app-project,.left{-ms-flex-direction:column;flex-direction:column}.left{-ms-flex-align:start;align-items:flex-start}}\@media only screen and (max-width:420px){.app-project{width:100vw}}"}}class d{constructor(e){t(this,e)}render(){return e("div",{class:"app-section"},e("div",{class:"wrapper"},e("slot",null)))}static get style(){return".app-section{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;border-bottom:solid 3px var(--background-dark)}.wrapper{max-width:960px;-ms-flex-positive:1;flex-grow:1;padding:0 20px}"}}class m{constructor(e){t(this,e)}render(){return e("nice-anim",{delay:400,"trigger-distance":"0%","animation-distance":"10%"},e("div",{class:"app-skills"},this.skills.map(t=>e("app-skills-panel",{config:t}))))}static get style(){return".app-skills{border:solid 2px var(--foreground-dark);border-radius:8px;display:-ms-flexbox;display:flex;margin:-50px 0 50px 0;background:var(--foreground-light);-webkit-box-shadow:0 4px 30px var(--shadow);box-shadow:0 4px 30px var(--shadow)}.app-skills app-skills-panel{border-right:solid 2px var(--foreground-dark);-ms-flex:1;flex:1;width:100%}.app-skills app-skills-panel:last-child{border-right:none}\@media only screen and (max-width:768px){.app-skills{-ms-flex-direction:column;flex-direction:column}.app-skills app-skills-panel{border-right:none;border-bottom:solid 2px var(--foreground-dark)}.app-skills app-skills-panel:last-child{border-bottom:none}}"}}class g{constructor(e){t(this,e)}render(){return e("div",{class:"app-skills-panel"},e("header",null,e("app-icon",{icon:{prefix:"fal",iconName:this.config.icon}}),e("span",null,this.config.label)),e("section",null,this.config.skillList.map(t=>e("span",null,t))))}static get style(){return".app-skills-panel{padding:30px;min-width:225px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-positive:1;flex-grow:1}.app-skills-panel,header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}header{font-family:Inconsolata,monospace;font-size:24px;margin-bottom:20px}header>app-icon{font-size:48px;margin-bottom:20px;color:var(--primary)}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}section span{margin-top:10px;text-align:center;opacity:var(--text-secondary)}"}}class b{constructor(e){t(this,e),this.visible=!1}async onSWUpdate(){const t=await navigator.serviceWorker.getRegistration();t&&t.waiting&&(this.visible=!0,t.waiting.postMessage({type:"SKIP_WAITING"}))}render(){return this.visible?e("div",{class:"app-update"},e("div",{class:"holder",onClick:()=>window.location.reload()},e("app-icon",{icon:{prefix:"far",iconName:"sparkles"}}),e("div",{class:"auto-return"},e("span",null,"New content is available!"),e("span",null,"Refresh or click to update.")))):null}static get style(){return"\@-webkit-keyframes slideUp{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes slideUp{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\@-webkit-keyframes slideDown{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes slideDown{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.app-update{position:fixed;bottom:0;width:100%;-ms-flex-pack:center;justify-content:center;-webkit-animation:slideUp .5s ease forwards;animation:slideUp .5s ease forwards}.app-update,.holder{display:-ms-flexbox;display:flex}.holder{-ms-flex-align:center;align-items:center;background:var(--background);border:solid 2px var(--primary);border-radius:8px;color:#fff;font-size:1.125em;margin:20px;padding:10px 20px;-webkit-box-shadow:0 2px 8px var(--shadow);box-shadow:0 2px 8px var(--shadow);cursor:pointer}.holder app-icon{font-size:1.5em;margin-right:20px}.auto-return{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-positive:1;flex-grow:1}.auto-return span{white-space:nowrap;margin:0 5px}\@media only screen and (max-width:768px){.app-update{bottom:auto;top:0;-webkit-animation-name:slideDown;animation-name:slideDown}.holder{width:100%;margin:0;border:none;border-bottom:solid 2px var(--primary);border-radius:0}.holder span{text-align:center}}"}}class f{constructor(e){t(this,e),this.direction="up",this.delay=0,this.duration=500,this.animationDistance="30%",this.triggerDistance="33%"}componentDidLoad(){this.addIntersectionObserver();const t="right"===this.direction||"down"===this.direction?"-"+this.animationDistance:this.animationDistance;this.el.querySelector(".nice-anim").style.setProperty("--distance",t)}addIntersectionObserver(){this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.el.querySelector(".nice-anim").classList.add(`slide-${this.direction}`),this.removeIntersectionObserver())},{threshold:parseFloat(this.triggerDistance)/100}),this.io.observe(this.el.querySelector(".nice-anim"))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return e("div",{class:"nice-anim",style:{animationDuration:`${this.duration}ms`,animationDelay:`${this.delay}ms`}},e("slot",null))}get el(){return i(this)}static get style(){return"\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}.nice-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:.5s;animation-duration:.5s}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-left,.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}"}}export{a as app_about,r as app_browser_preview,l as app_footer,c as app_home,p as app_icon,u as app_img,h as app_project,d as app_section,m as app_skills,g as app_skills_panel,b as app_update,f as nice_anim};