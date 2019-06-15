import { r as registerInstance, h } from './chunk-06f44aaa.js';

class AppSkills {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-skills' }, this.skills.map((skillSet) => (h("app-skills-panel", { config: skillSet })))));
    }
    static get style() { return ".app-skills {\n  border: solid 1px var(--foreground-dark);\n  border-radius: 8px;\n  display: -ms-flexbox;\n  display: flex;\n  margin: -50px 0 50px 0px;\n  background: var(--foreground-light);\n  -webkit-box-shadow: 0px 4px 30px hsla(var(--hue), var(--saturation), 18%, .3);\n  box-shadow: 0px 4px 30px hsla(var(--hue), var(--saturation), 18%, .3);\n}\n\n.app-skills app-skills-panel {\n  border-right: solid 1px var(--foreground-dark);\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n}\n\n.app-skills app-skills-panel:last-child {\n  border-right: none;\n}\n\n\@media only screen and (max-width: 768px) {\n  .app-skills {\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n\n  .app-skills app-skills-panel {\n    border-right: none;\n    border-bottom: solid 1px var(--foreground-dark);\n  }\n\n  .app-skills app-skills-panel:last-child {\n    border-bottom: none;\n  }\n}"; }
}

export { AppSkills as app_skills };
