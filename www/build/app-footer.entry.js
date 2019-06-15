import { r as registerInstance, h } from './chunk-06f44aaa.js';

class AppFooter {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("footer", { class: 'app-footer' }, h("footer", null, h("p", null, "nick.winans.codes \u00A9 ", new Date().getFullYear()), h("p", null, "powered by ", h("a", { target: '_blank', href: 'https://stenciljs.com' }, "Stencil.js"), " and ", h("a", { target: 'blank', href: 'https://github.com/Nicell/nicell.github.io' }, "GitHub Pages")))));
    }
    static get style() { return ""; }
}

export { AppFooter as app_footer };
