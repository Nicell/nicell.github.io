import { r as registerInstance, h, c as getElement } from './chunk-06f44aaa.js';

class AppBrowserPreview {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleImgLoad = this.handleImgLoad.bind(this);
    }
    handleImgLoad() {
        this.el.shadowRoot.querySelector('img.preview').classList.remove('loading');
    }
    render() {
        return (h("div", { class: `app-browser-preview ${this.direction}` }, h("div", { class: 'titlebar' }, h("div", { class: 'button red' }), h("div", { class: 'button yellow' }), h("div", { class: 'button green' })), h("app-img", { alt: `${this.site} preview`, src: `preview-${this.site}`, type: 'png' })));
    }
    get el() { return getElement(this); }
    static get style() { return ".app-browser-preview {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border: solid 1px var(--background-dark);\n  border-radius: 8px;\n  overflow: hidden;\n  height: 400px;\n  width: 600px;\n  margin: 30px;\n  -webkit-box-shadow: 0px 4px 30px var(--background-dark);\n  box-shadow: 0px 4px 30px var(--background-dark);\n  background: var(--background);\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n\n.left.app-browser-preview {\n  margin-left: -250px;\n}\n\n.right.app-browser-preview {\n  margin-right: -250px;\n}\n\n.titlebar {\n  padding: 10px;\n  background: var(--background);\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n  z-index: 1;\n}\n\n.button {\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n  margin-right: 5px;\n}\n\n.red {\n  background: hsl(0, 100%, 62%);\n}\n\n.yellow {\n  background: hsl(45, 100%, 62%);\n}\n\n.green {\n  background: hsl(130, 100%, 62%);\n}\n\napp-img {\n  width: 600px;\n  height: 370px;\n  background: #ffffff;\n}\n\nimg {\n  width: 600px;\n  height: 370px;\n}\n\n.loading {\n  opacity: 0;\n}"; }
}

export { AppBrowserPreview as app_browser_preview };
