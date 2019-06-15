import { r as registerInstance, h, c as getElement } from './chunk-06f44aaa.js';

class AppImg {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleImgLoad = this.handleImgLoad.bind(this);
    }
    handleImgLoad() {
        this.el.querySelector('img').classList.remove('loading');
    }
    render() {
        return (h("picture", { class: 'app-img' }, h("source", { srcSet: `/assets/img/${this.src}.webp`, type: 'image/webp' }), h("source", { srcSet: `/assets/img/${this.src}.${this.type}`, type: `image/${this.type === 'jpg' ? 'jpeg' : 'png'}` }), h("img", { onLoad: this.handleImgLoad, class: 'loading', alt: this.alt, src: `/assets/img/${this.src}.${this.type}` })));
    }
    get el() { return getElement(this); }
    static get style() { return "img {\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n\n.loading {\n  opacity: 0;\n}"; }
}

export { AppImg as app_img };
