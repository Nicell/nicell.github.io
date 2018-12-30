/*! Built with http://stenciljs.com */
App.loadBundle("7wfpdnvk",["exports"],function(e){var t=window.App.h,n=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"app-project "+this.config.direction},t("browser-preview",{site:this.config.image,direction:this.config.direction}),t("section",null,t("h1",null,this.config.title),t("p",null,this.config.description)))},Object.defineProperty(e,"is",{get:function(){return"app-project"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{type:"Any",attr:"config"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-project{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.right{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:start;align-items:flex-start}h1{font-family:Inconsolata,monospace}section{-ms-flex:1;flex:1;-ms-flex-item-align:start;align-self:flex-start;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}p{line-height:1.5}\@media only screen and (max-width:768px){.app-project{-ms-flex-direction:column;flex-direction:column}}\@media only screen and (max-width:420px){.app-project{width:100vw}}"},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){this.handleScroll=this.handleScroll.bind(this),this.handleImgLoad=this.handleImgLoad.bind(this)}return e.prototype.componentDidLoad=function(){var e=this;setTimeout(function(){window.addEventListener("scroll",e.handleScroll),window.scrollTo(window.scrollX,window.scrollY-1),window.scrollTo(window.scrollX,window.scrollY+1)},1)},e.prototype.handleScroll=function(e){var t=e.target.documentElement.clientHeight,n=this.el.getBoundingClientRect();t>=n.top+n.height/2&&(this.el.shadowRoot.querySelector("div").classList.remove("hidden"),window.removeEventListener("scroll",this.handleScroll))},e.prototype.handleImgLoad=function(){this.el.shadowRoot.querySelector("img.preview").classList.remove("loading")},e.prototype.render=function(){return t("div",{class:"browser-preview hidden "+this.direction},t("div",{class:"titlebar"},t("div",{class:"button red"}),t("div",{class:"button yellow"}),t("div",{class:"button green"})),t("img",{onLoad:this.handleImgLoad,class:"loading preview",src:"/assets/img/preview-"+this.site+".png"}))},Object.defineProperty(e,"is",{get:function(){return"browser-preview"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{direction:{type:String,attr:"direction"},el:{elementRef:!0},site:{type:String,attr:"site"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".browser-preview{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border:solid 1px var(--background-dark);border-radius:8px;overflow:hidden;height:400px;width:600px;margin:30px;-webkit-box-shadow:0 4px 30px var(--background-dark);box-shadow:0 4px 30px var(--background-dark);background:var(--background);-webkit-transition:all 1s ease;transition:all 1s ease;-ms-flex-negative:1;flex-shrink:1}.left.browser-preview{margin-left:-250px}.right.browser-preview{margin-right:-250px}.hidden{opacity:0}.left.hidden{-webkit-transform:translate(-100%);transform:translate(-100%)}.right.hidden{-webkit-transform:translate(100%);transform:translate(100%)}.titlebar{padding:10px;background:var(--background);display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.3);box-shadow:0 1px 5px rgba(0,0,0,.3);z-index:1}.button{height:10px;width:10px;border-radius:5px;margin-right:5px}.red{background:#ff3d3d}.yellow{background:#ffcf3d}.green{background:#3dff5e}.preview{width:600px;height:370px;background:#fff;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.loading{opacity:0}"},enumerable:!0,configurable:!0}),e}();e.AppProject=n,e.BrowserPreview=r,Object.defineProperty(e,"__esModule",{value:!0})});