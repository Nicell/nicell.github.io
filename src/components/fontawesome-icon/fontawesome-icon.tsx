import { Component, Prop } from '@stencil/core';
import { icon, IconLookup, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'fontawesome-icon',
  styleUrl: 'fontawesome-icon.css',
  shadow: false
})
export class FontAwesomeIcon {
  @Prop() icon: IconLookup | IconName;
  @Prop() class?: string;

  render() {
    let iconProp: IconLookup = typeof this.icon === 'object' ? this.icon : { prefix: 'fas', iconName: this.icon };

    const iconObj = icon(iconProp);

    if (!iconObj) {
      console.error(`Icon not found! Icon: ${this.icon}`)
      return
    }

    const iconSVG = icon(iconProp).node[0];

    return (
      <span
        class={this.class}
        ref={(el: HTMLDivElement) => el.firstChild ? el.replaceChild(iconSVG, el.firstChild) : el.appendChild(iconSVG)}
      />
    );
  }
}
