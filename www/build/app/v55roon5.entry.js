/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.anim="up",this.delay=0,this.duration=500,this.distance="20%"}componentDidLoad(){this.addIntersectionObserver(),this.el.querySelector(".app-anim").style.setProperty("--distance",this.distance)}addIntersectionObserver(){this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&this.el.querySelector(".app-anim").classList.add(`slide-${this.anim}`)}),this.io.observe(this.el.querySelector(".app-anim"))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return t("div",{class:`app-anim ${this.anim}`,style:{animationDuration:`${this.duration}ms`,animationDelay:`${this.delay}ms`}},t("slot",null))}static get is(){return"app-anim"}static get properties(){return{anim:{type:String,attr:"anim"},delay:{type:Number,attr:"delay"},distance:{type:String,attr:"distance"},duration:{type:Number,attr:"duration"},el:{elementRef:!0}}}static get style(){return".app-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}.app-anim.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.app-anim.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}.app-anim.slide-left{-webkit-animation-name:slide-left;animation-name:slide-left}\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}"}}export{e as AppAnim};