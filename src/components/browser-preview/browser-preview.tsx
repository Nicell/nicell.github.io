import { Component, Element } from '@stencil/core';

@Component({
  tag: 'browser-preview',
  styleUrl: 'browser-preview.css',
  shadow: true,
})
export class BrowserPreview {
  @Element() el: HTMLElement;

  constructor() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  componentDidLoad() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
  }

  handleScroll(e: UIEvent) {
    const doc = (e.target as Document).documentElement;
    const bottom =  doc.scrollTop + doc.clientHeight;
    const rect = this.el.getBoundingClientRect();

    if (bottom >= rect.top + rect.height/2) {
      this.el.shadowRoot.querySelector('div').classList.remove('hidden');
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleImgLoad() {
    this.el.shadowRoot.querySelector('img.preview').classList.remove('loading');
  }

  render() {
    return (
      <div class='browser-preview hidden'>
        <div class='titlebar'>
          <div class='button red' />
          <div class='button yellow' />
          <div class='button green' />
        </div>
        <img
          onLoad={this.handleImgLoad}
          class='loading preview'
          src='/assets/img/preview-hlpugs.png'
        />
      </div>
    );
  }
}
