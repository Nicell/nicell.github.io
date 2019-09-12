import { Component, Prop, h } from '@stencil/core';
import { IconLookup, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true
})
export class AppButton {
  @Prop() href: string;
  @Prop() target: string = '';
  @Prop() icon?: IconLookup | IconName;

  render() {
    return (
      <a target={this.target} href={this.href}>
        {this.icon ? <app-icon icon={this.icon} /> : null}
        <slot/>
      </a>
    )
  }
}
