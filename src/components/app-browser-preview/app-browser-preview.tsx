import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-browser-preview',
  styleUrl: 'app-browser-preview.css',
  shadow: true,
})
export class AppBrowserPreview {
  @Element() el: HTMLElement;
  @Prop() site: string;
  @Prop() direction: 'left' | 'right';

  render() {
    return (
      <div class={`app-browser-preview ${this.direction}`}>
        <div class="titlebar">
          <div class="button red" />
          <div class="button yellow" />
          <div class="button green" />
        </div>
        <app-img
          alt={`${this.site} preview`}
          src={`preview-${this.site}`}
          type="png"
        />
      </div>
    );
  }
}
