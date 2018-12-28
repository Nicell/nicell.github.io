import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-section',
  styleUrl: 'app-section.css',
  shadow: true
})
export class AppSection {
  @Prop() dark: boolean = false;

  render() {
    return (
      <div class={`app-section ${this.dark ? 'dark' : ''}`}>
        <div class='wrapper'>
          <slot />
        </div>
      </div>
    );
  }
}