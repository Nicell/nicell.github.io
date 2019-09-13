import { Component, Prop, h } from '@stencil/core';
import { library, config, icon, IconLookup, IconName } from '@fortawesome/fontawesome-svg-core';
import { faWindow, faServer, faCogs } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope as farEnvelope, faSparkles } from '@fortawesome/pro-regular-svg-icons';
import { faEnvelope as fasEnvelope, faCubes } from '@fortawesome/pro-solid-svg-icons';
import { faGithub, faTwitch, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(farEnvelope, fasEnvelope, faWindow, faServer, faCogs, faSparkles, faCubes, faGithub, faTwitch, faLinkedin);

config.autoAddCss = false;

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
      console.error(`Icon not found! Icon: ${typeof this.icon === 'object' ? `${this.icon.prefix}.${this.icon.iconName}` : `fal.${this.icon}`}`);
      return;
    }

    const iconSVG = iconObj.html[0];

    return (
      <span
        class={`app-icon ${this.class}`}
        ref={(el: HTMLDivElement) => el.innerHTML = iconSVG }
      />
    );
  }
}
