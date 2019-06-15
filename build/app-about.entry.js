import { r as registerInstance, h, c as getElement } from './chunk-06f44aaa.js';

class AppAbout {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-about' }, h("app-anim", null, h("h1", null, "nick.winans.codes")), h("app-anim", { delay: 200 }, h("app-img", { alt: 'Me', src: 'me', type: 'jpg' })), h("app-anim", { delay: 400 }, h("p", null, "Hi, I'm Nick. I'm a high school student fascinated by the web. Since my first website I made in 2012, I've been continually exploring all ends of web development. Along the way I've met great people, made meaningful projects, and learned an unbelievable amount.")), h("a", { target: '_blank', href: 'mailto:nick@winans.codes' }, "Contact Me")));
    }
    get el() { return getElement(this); }
    static get style() { return ".app-about {\n  height: 90vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-bottom: 20vh;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nh1 {\n  font-family: \'Inconsolata\', monospace;\n}\n\nimg {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 4px 30px var(--background-dark);\n  box-shadow: 0px 4px 30px var(--background-dark);\n}\n\np {\n  opacity: var(--text-secondary);\n  max-width: 500px;\n  text-align: center;\n}\n\na {\n  border: solid 2px var(--primary);\n  border-radius: 999px;\n  padding: 10px 20px;\n  background: var(--background);\n  color: hsl(0, 0%, 100%);\n  -webkit-box-shadow: 0px 2px 15px hsla(var(--hue), var(--saturation), 18%, .5);\n  box-shadow: 0px 2px 15px hsla(var(--hue), var(--saturation), 18%, .5);\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  font-family: \'Iconsolata\', monospace;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-decoration: none;\n  font-size: 16px;\n  z-index: 2;\n}\n\na:before {\n  display: block;\n  position: absolute;\n  top: 0;\n  content: \'\';\n  width: 120%;\n  height: 100%;\n  background: var(--primary);\n  z-index: -1;\n  -webkit-transform: skewX(30deg) translateX(-125%);\n  transform: skewX(30deg) translateX(-125%);\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n\na:hover:before {\n  -webkit-transform: skewX(30deg) translateX(-15%);\n  transform: skewX(30deg) translateX(-15%);\n}"; }
}

export { AppAbout as app_about };
