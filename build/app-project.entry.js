import { r as registerInstance, h } from './chunk-06f44aaa.js';

class AppProject {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const oppositeDir = this.config.direction === 'left' ? 'right' : 'left';
        return (h("div", { class: `app-project ${this.config.direction}` }, h("app-anim", { anim: oppositeDir, duration: 1000, distance: `${oppositeDir === 'right' ? '-' : ''}100%` }, h("app-browser-preview", { site: this.config.image, direction: this.config.direction })), h("section", null, h("app-anim", { delay: 200 }, h("h1", null, this.config.title)), h("app-anim", { delay: 300 }, h("p", null, this.config.description)))));
    }
    static get style() { return ".app-project {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.right {\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\nh1 {\n  font-family: \'Inconsolata\', monospace;\n}\n\nsection {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 15px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\np {\n  line-height: 1.5;\n}\n\n\@media only screen and (max-width: 768px) {\n  .app-project {\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n}\n\n\@media only screen and (max-width: 420px) {\n  .app-project {\n    width: 100vw;\n  }\n}"; }
}

export { AppProject as app_project };
