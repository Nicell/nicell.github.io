/*! Built with http://stenciljs.com */
const{h:e}=window.App;class t{render(){return e("div",{class:`app-project ${this.config.direction}`},e("browser-preview",{site:this.config.image,direction:this.config.direction}),e("section",null,e("h1",null,this.config.title),e("p",null,this.config.description)))}static get is(){return"app-project"}static get encapsulation(){return"shadow"}static get properties(){return{config:{type:"Any",attr:"config"}}}static get style(){return".app-project.sc-app-project{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.right.sc-app-project{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:start;align-items:flex-start}h1.sc-app-project{font-family:Inconsolata,monospace}section.sc-app-project{-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}p.sc-app-project{line-height:1.5}\@media only screen and (max-width:768px){.app-project.sc-app-project{-ms-flex-direction:column;flex-direction:column}}\@media only screen and (max-width:420px){.app-project.sc-app-project{width:100vw}}"}}class i{constructor(){this.handleImgLoad=this.handleImgLoad.bind(this)}componentDidLoad(){this.addIntersectionObserver()}addIntersectionObserver(){this.io=new IntersectionObserver(e=>{e[0].isIntersecting&&this.el.shadowRoot.querySelector("div").classList.add("visible")}),this.io.observe(this.el.shadowRoot.querySelector("div"))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}handleImgLoad(){this.el.shadowRoot.querySelector("img.preview").classList.remove("loading")}render(){return e("div",{class:`browser-preview ${this.direction}`},e("div",{class:"titlebar"},e("div",{class:"button red"}),e("div",{class:"button yellow"}),e("div",{class:"button green"})),e("app-img",{alt:`${this.site} preview`,src:`preview-${this.site}`,type:"png"}))}static get is(){return"browser-preview"}static get encapsulation(){return"shadow"}static get properties(){return{direction:{type:String,attr:"direction"},el:{elementRef:!0},site:{type:String,attr:"site"}}}static get style(){return"\@-webkit-keyframes slide-in-right{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}\@keyframes slide-in-right{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}\@-webkit-keyframes slide-in-left{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}\@keyframes slide-in-left{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.browser-preview.sc-browser-preview{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:solid 1px var(--background-dark);border-radius:8px;overflow:hidden;height:400px;width:600px;margin:30px;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark);background:var(--background);-ms-flex-negative:1;flex-shrink:1;opacity:0}.left.browser-preview.sc-browser-preview{margin-left:-250px}.right.browser-preview.sc-browser-preview{margin-right:-250px}.left.visible.sc-browser-preview{-webkit-animation:slide-in-right 1s ease forwards;animation:slide-in-right 1s ease forwards}.right.visible.sc-browser-preview{-webkit-animation:slide-in-left 1s ease forwards;animation:slide-in-left 1s ease forwards}.titlebar.sc-browser-preview{padding:10px;background:var(--background);display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.3);box-shadow:0 1px 5px rgba(0,0,0,.3);z-index:1}.button.sc-browser-preview{height:10px;width:10px;border-radius:5px;margin-right:5px}.red.sc-browser-preview{background:#ff3d3d}.yellow.sc-browser-preview{background:#ffcf3d}.green.sc-browser-preview{background:#3dff5e}app-img.sc-browser-preview{background:#fff}app-img.sc-browser-preview, img.sc-browser-preview{width:600px;height:370px}.loading.sc-browser-preview{opacity:0}"}}export{t as AppProject,i as BrowserPreview};