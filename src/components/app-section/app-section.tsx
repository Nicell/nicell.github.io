import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-section',
  styleUrl: 'app-section.css',
  shadow: true
})
export class AppSection {
  render() {
    return (
      <div class="app-section">
        <div class="wrapper">
          <slot />
        </div>
      </div>
    );
  }
}
