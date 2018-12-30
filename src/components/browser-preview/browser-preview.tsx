import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'browser-preview',
  styleUrl: 'browser-preview.css',
  shadow: true,
})
export class BrowserPreview {
  @Element() el: HTMLElement;
  @Prop() site: string;
  @Prop() direction: 'left' | 'right';

  io: IntersectionObserver;

  constructor() {
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    this.io = new IntersectionObserver((data: any) => {
      if (data[0].isIntersecting) {
        this.el.shadowRoot.querySelector('div').classList.add('visible');
      }
    });

    this.io.observe(this.el.shadowRoot.querySelector('div'));
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  handleImgLoad() {
    this.el.shadowRoot.querySelector('img.preview').classList.remove('loading');
  }

  render() {
    return (
      <div class={`browser-preview ${this.direction}`}>
        <div class='titlebar'>
          <div class='button red' />
          <div class='button yellow' />
          <div class='button green' />
        </div>
        <app-img
          alt={`${this.site} preview`}
          src={`preview-${this.site}`}
          type='png'
        />
      </div>
    );
  }
}
