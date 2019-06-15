import { r as registerInstance, h } from './chunk-06f44aaa.js';

class AppSection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-section' }, h("div", { class: 'wrapper' }, h("slot", null))));
    }
    static get style() { return ".app-section {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.wrapper {\n  max-width: 960px;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  padding: 0 20px;\n}"; }
}

export { AppSection as app_section };
