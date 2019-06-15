import { r as registerInstance, h } from './chunk-06f44aaa.js';

class AppSkillsPanel {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-skills-panel' }, h("header", null, h("app-icon", { icon: { prefix: 'fal', iconName: this.config.icon } }), h("span", null, this.config.label)), h("section", null, h("span", null, this.config.description), h("p", null, "Experience with:"), this.config.skillList.map((skill) => (h("span", null, skill))))));
    }
    static get style() { return ".app-skills-panel {\n  padding: 30px;\n  min-width: 225px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nheader {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  font-family: \'Inconsolata\', monospace;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n\nheader > app-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n  color: var(--primary);\n}\n\nsection {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nsection span {\n  margin-top: 10px;\n  text-align: center;\n  opacity: var(--text-secondary);\n}"; }
}

export { AppSkillsPanel as app_skills_panel };
