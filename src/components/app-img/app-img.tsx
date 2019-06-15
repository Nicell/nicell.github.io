import { h, Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: false
})
export class AppImg {
  @Element() el: HTMLElement;
  @Prop() alt: string;
  @Prop() src: string;
  @Prop() type: 'jpg' | 'png';

  constructor() {
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  handleImgLoad() {
    this.el.querySelector('img').classList.remove('loading');
  }

  render() {
    return (
      <picture class='app-img'>
        <source
          srcSet={`/assets/img/${this.src}.webp`}
          type='image/webp'
        />
        <source
          srcSet={`/assets/img/${this.src}.${this.type}`}
          type={`image/${this.type === 'jpg' ? 'jpeg' : 'png'}`}
        />
        <img
          onLoad={this.handleImgLoad}
          class='loading'
          alt={this.alt}
          src={`/assets/img/${this.src}.${this.type}`}
        />
      </picture>
    );
  }
}
