System.register(["./p-f62a6e81.system.js"],function(e){"use strict";var t,n,i,r;return{setters:[function(e){t=e.r;n=e.h;i=e.g;r=e.i}],execute:function(){var o=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-about"},n("app-anim",null,n("h1",null,"nick.winans.codes")),n("app-anim",{delay:200},n("app-img",{alt:"Me",src:"me",type:"jpg"})),n("app-anim",{delay:400},n("p",null,"Hi, I'm Nick. I'm a high school student fascinated by the web. Since my first website I made in 2012, I've been continually exploring all ends of web development. Along the way I've met great people, made meaningful projects, and learned an unbelievable amount.")),n("a",{target:"_blank",href:"mailto:nick@winans.codes"},"Contact Me"))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".app-about{height:90vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-bottom:20vh;-webkit-box-sizing:border-box;box-sizing:border-box}h1{font-family:Inconsolata,monospace}img{width:200px;height:200px;border-radius:50%;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark)}p{opacity:var(--text-secondary);max-width:500px;text-align:center}a{border:solid 2px var(--primary);border-radius:999px;padding:10px 20px;background:var(--background);color:#fff;-webkit-box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);box-shadow:0 2px 15px hsla(var(--hue),var(--saturation),18%,.5);position:fixed;top:20px;right:20px;font-family:Iconsolata,monospace;cursor:pointer;outline:none;overflow:hidden;text-decoration:none;font-size:16px;z-index:2}a:before{display:block;position:absolute;top:0;content:\"\";width:120%;height:100%;background:var(--primary);z-index:-1;-webkit-transform:skewX(30deg) translateX(-125%);transform:skewX(30deg) translateX(-125%);-webkit-transition:all .2s ease;transition:all .2s ease}a:hover:before{-webkit-transform:skewX(30deg) translateX(-15%);transform:skewX(30deg) translateX(-15%)}"},enumerable:true,configurable:true});return e}();e("app_about",o);var s=function(){function e(e){t(this,e);this.anim="up";this.delay=0;this.duration=500;this.distance="30%"}e.prototype.componentDidLoad=function(){this.addIntersectionObserver();this.el.querySelector(".app-anim").style.setProperty("--distance",this.distance)};e.prototype.addIntersectionObserver=function(){var e=this;this.io=new IntersectionObserver(function(t){if(t[0].isIntersecting){e.el.querySelector(".app-anim").classList.add("slide-"+e.anim)}});this.io.observe(this.el.querySelector(".trigger"))};e.prototype.removeIntersectionObserver=function(){if(this.io){this.io.disconnect();this.io=null}};e.prototype.render=function(){return n("div",{class:"app-anim "+this.anim,style:{animationDuration:this.duration+"ms",animationDelay:this.delay+"ms"}},n("slot",null),n("div",{class:"trigger"}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".app-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;position:relative}.app-anim.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.app-anim.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}.app-anim.slide-left{-webkit-animation-name:slide-left;animation-name:slide-left}.trigger{position:absolute;top:33%;left:50%;width:1px;height:1px}\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}"},enumerable:true,configurable:true});return e}();e("app_anim",s);var a=function(){function e(e){t(this,e);this.handleImgLoad=this.handleImgLoad.bind(this)}e.prototype.handleImgLoad=function(){this.el.shadowRoot.querySelector("img.preview").classList.remove("loading")};e.prototype.render=function(){return n("div",{class:"app-browser-preview "+this.direction},n("div",{class:"titlebar"},n("div",{class:"button red"}),n("div",{class:"button yellow"}),n("div",{class:"button green"})),n("app-img",{alt:this.site+" preview",src:"preview-"+this.site,type:"png"}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".app-browser-preview{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:solid 1px var(--background-dark);border-radius:8px;overflow:hidden;height:400px;width:600px;margin:30px;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark);background:var(--background);-ms-flex-negative:1;flex-shrink:1}.left.app-browser-preview{margin-left:-250px}.right.app-browser-preview{margin-right:-250px}.titlebar{padding:10px;background:var(--background);display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.3);box-shadow:0 1px 5px rgba(0,0,0,.3);z-index:1}.button{height:10px;width:10px;border-radius:5px;margin-right:5px}.red{background:#ff3d3d}.yellow{background:#ffcf3d}.green{background:#3dff5e}app-img{background:#fff}app-img,img{width:600px;height:370px}.loading{opacity:0}"},enumerable:true,configurable:true});return e}();e("app_browser_preview",a);var l=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("footer",{class:"app-footer"},n("footer",null,n("p",null,"nick.winans.codes © ",(new Date).getFullYear()),n("p",null,"powered by ",n("a",{target:"_blank",rel:"noopener",href:"https://stenciljs.com"},"Stencil.js")," and ",n("a",{target:"blank",rel:"noopener",href:"https://github.com/Nicell/nicell.github.io"},"GitHub Pages"))))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("app_footer",l);var p={skills:[{label:"Front End",icon:"window",description:"",skillList:["React","CSS and SASS","Vanilla JS DOM interactions","Handlebars","Stencil.js","jQuery"]},{label:"Back End",icon:"server",description:"",skillList:["Node.js","Express","TypeScript","Redis","MySQL","MongoDB","PostgreSQL","Websockets/Socket.io"]},{label:"DevOps",icon:"cogs",description:"",skillList:["Debian/Ubuntu","NGINX","AWS","Vultr","GitHub Pages","Cloudflare","Docker","GitLab"]}],projects:[{title:"HLPugs.tf",description:"HLPugs.tf is a captain draft pick up game creator for Team Fortress 2.\n        It's inspired by a similar project named PugChamp, but it fits into another gamemode PugChamp does not offer.\n        The current site was built using Vanilla JS, Socket.io, Node.js, and Express.\n        An open source rewrite of the site is currently in progress allowing for more configuration and wider usability.\n        The site has served over 5,000 games to over a 1,000 users.\n        Today the site is still used every day by TF2 community members in North America and Europe.",image:"hlpugs",direction:"left"},{title:"Let's Tutor",description:"Let's Tutor is a peer tutoring solution for schools.\n        It offers a simple way to manage peer tutoring schedules and writing submissions.\n        Tutors are able to easily view, claim, and edit submissions sent by other students at school.\n        The site is built using React and Websockets, and it's a Progressive Web App.\n        This project was piloted at my school last year with great success.\n        Currently this project is in the process of an enhancement.\n        React Native and a new admin dashboard built with React are on the list of changes.",image:"letstutor",direction:"right"}]};var c=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-home"},n("app-section",null,n("app-about",null)),n("app-section",null,n("app-skills",{skills:p.skills})),p.projects.map(function(e){return n("app-section",null,n("app-project",{config:e}))}),n("app-section",null,n("app-footer",null)))};Object.defineProperty(e,"style",{get:function(){return".app-home{background:var(--foreground-light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden}app-section:nth-child(odd){background:var(--background);color:#fff}app-section:first-child{background-color:#363c4e;background-image:url(/assets/img/tile.svg);background-size:200px}a{color:var(--text-link)}"},enumerable:true,configurable:true});return e}();e("app_home",c);var u=function(){function e(e){t(this,e)}e.prototype.render=function(){var e=typeof this.icon==="object"?this.icon:{prefix:"fal",iconName:this.icon};var t=r(e);if(!t){console.error("Icon not found! Icon: "+this.icon);return}var i=t.node[0];return n("span",{class:"app-icon "+this.class,ref:function(e){return e.firstChild?e.replaceChild(i,e.firstChild):e.appendChild(i)}})};Object.defineProperty(e,"style",{get:function(){return".app-icon{display:contents}.svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.fa-fw,.fa-layers,.fa-li{text-align:center}.fa-layers,.fa-stack,.svg-inline--fa{display:inline-block}.svg-inline--fa{font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;-webkit-transform-origin:center center;transform-origin:center center}.fa-layers{height:1em;position:relative;vertical-align:-.125em;width:1em}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}\@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}"},enumerable:true,configurable:true});return e}();e("app_icon",u);var d=function(){function e(e){t(this,e);this.handleImgLoad=this.handleImgLoad.bind(this)}e.prototype.handleImgLoad=function(){this.el.querySelector("img").classList.remove("loading")};e.prototype.render=function(){return n("picture",{class:"app-img"},n("source",{srcSet:"/assets/img/"+this.src+".webp",type:"image/webp"}),n("source",{srcSet:"/assets/img/"+this.src+"."+this.type,type:"image/"+(this.type==="jpg"?"jpeg":"png")}),n("img",{onLoad:this.handleImgLoad,class:"loading",alt:this.alt,src:"/assets/img/"+this.src+"."+this.type}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"img{-webkit-transition:all .2s ease;transition:all .2s ease}.loading{opacity:0}"},enumerable:true,configurable:true});return e}();e("app_img",d);var f=function(){function e(e){t(this,e)}e.prototype.render=function(){var e=this.config.direction==="left"?"right":"left";return n("div",{class:"app-project "+this.config.direction},n("app-anim",{anim:e,duration:1e3,distance:(e==="right"?"-":"")+"100%"},n("app-browser-preview",{site:this.config.image,direction:this.config.direction})),n("section",null,n("app-anim",{delay:200},n("h1",null,this.config.title)),n("app-anim",{delay:300},n("p",null,this.config.description))))};Object.defineProperty(e,"style",{get:function(){return".app-project{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.right{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:start;align-items:flex-start}h1{font-family:Inconsolata,monospace}section{-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}p{line-height:1.5}\@media only screen and (max-width:768px){.app-project{-ms-flex-direction:column;flex-direction:column}}\@media only screen and (max-width:420px){.app-project{width:100vw}}"},enumerable:true,configurable:true});return e}();e("app_project",f);var h=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-section"},n("div",{class:"wrapper"},n("slot",null)))};Object.defineProperty(e,"style",{get:function(){return".app-section{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.wrapper{max-width:960px;-ms-flex-positive:1;flex-grow:1;padding:0 20px}"},enumerable:true,configurable:true});return e}();e("app_section",h);var g=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-skills"},this.skills.map(function(e){return n("app-skills-panel",{config:e})}))};Object.defineProperty(e,"style",{get:function(){return".app-skills{border:solid 1px var(--foreground-dark);border-radius:8px;display:-ms-flexbox;display:flex;margin:-50px 0 50px 0;background:var(--foreground-light);-webkit-box-shadow:0 4px 30px hsla(var(--hue),var(--saturation),18%,.3);box-shadow:0 4px 30px hsla(var(--hue),var(--saturation),18%,.3)}.app-skills app-skills-panel{border-right:solid 1px var(--foreground-dark);-ms-flex:1;flex:1;width:100%}.app-skills app-skills-panel:last-child{border-right:none}\@media only screen and (max-width:768px){.app-skills{-ms-flex-direction:column;flex-direction:column}.app-skills app-skills-panel{border-right:none;border-bottom:solid 1px var(--foreground-dark)}.app-skills app-skills-panel:last-child{border-bottom:none}}"},enumerable:true,configurable:true});return e}();e("app_skills",g);var m=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-skills-panel"},n("header",null,n("app-icon",{icon:{prefix:"fal",iconName:this.config.icon}}),n("span",null,this.config.label)),n("section",null,n("span",null,this.config.description),n("p",null,"Experience with:"),this.config.skillList.map(function(e){return n("span",null,e)})))};Object.defineProperty(e,"style",{get:function(){return".app-skills-panel{padding:30px;min-width:225px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-positive:1;flex-grow:1}.app-skills-panel,header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}header{font-family:Inconsolata,monospace;font-size:24px;margin-bottom:20px}header>app-icon{font-size:48px;margin-bottom:20px;color:var(--primary)}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}section span{margin-top:10px;text-align:center;opacity:var(--text-secondary)}"},enumerable:true,configurable:true});return e}();e("app_skills_panel",m)}}});