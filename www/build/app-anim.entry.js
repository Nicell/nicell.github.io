import { r as registerInstance, h, c as getElement } from './chunk-06f44aaa.js';

class AppAnim {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anim = 'up';
        this.delay = 0;
        this.duration = 500;
        this.distance = '30%';
    }
    componentDidLoad() {
        this.addIntersectionObserver();
        this.el.querySelector('.app-anim').style.setProperty('--distance', this.distance);
    }
    addIntersectionObserver() {
        this.io = new IntersectionObserver((data) => {
            if (data[0].isIntersecting) {
                this.el.querySelector('.app-anim').classList.add(`slide-${this.anim}`);
            }
        });
        this.io.observe(this.el.querySelector('.trigger'));
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return (h("div", { class: `app-anim ${this.anim}`, style: {
                animationDuration: `${this.duration}ms`,
                animationDelay: `${this.delay}ms`
            } }, h("slot", null), h("div", { class: 'trigger' })));
    }
    get el() { return getElement(this); }
    static get style() { return ".app-anim {\n  opacity: 0;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease;\n  animation-timing-function: ease;\n  position: relative;\n}\n\n.app-anim.slide-up {\n  -webkit-animation-name: slide-up;\n  animation-name: slide-up;\n}\n\n.app-anim.slide-right {\n  -webkit-animation-name: slide-right;\n  animation-name: slide-right;\n}\n\n.app-anim.slide-left {\n  -webkit-animation-name: slide-left;\n  animation-name: slide-left;\n}\n\n.trigger {\n  position: absolute;\n  top: 33%;\n  left: 50%;\n  width: 1px;\n  height: 1px;\n}\n\n\@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(var(--distance));\n    transform: translateY(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(var(--distance));\n    transform: translateY(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\@-webkit-keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(var(--distance));\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\@keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(var(--distance));\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\@-webkit-keyframes slide-left {\n  0% {\n    -webkit-transform: translateX(var(--distance));\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\@keyframes slide-left {\n  0% {\n    -webkit-transform: translateX(var(--distance));\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}"; }
}

export { AppAnim as app_anim };
