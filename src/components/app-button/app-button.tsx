import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true
})
export class AppButton {
  @Prop() href: string;
  @Prop() target: string = '';

  render() {
    return (
      <a target={this.target} href={this.href}>
        <slot/>
      </a>
    )
  }
}
