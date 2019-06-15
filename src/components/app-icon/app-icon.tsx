import { h, Component, Prop } from '@stencil/core';
import { icon, IconLookup, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'app-icon',
  styleUrl: 'app-icon.css',
  shadow: false
})
export class AppIcon {
  @Prop() icon: IconLookup | IconName;
  @Prop() class?: string;

  render() {
    let iconProp: IconLookup = typeof this.icon === 'object' ? this.icon : { prefix: 'fal', iconName: this.icon };

    const iconObj = icon(iconProp);

    if (!iconObj) {
      console.error(`Icon not found! Icon: ${this.icon}`)
      return
    }

    const iconSVG = iconObj.node[0];

    return (
      <span
        class={`app-icon ${this.class}`}
        ref={(el: HTMLDivElement) => el.firstChild ? el.replaceChild(iconSVG, el.firstChild) : el.appendChild(iconSVG)}
      />
    );
  }
}
