import { h, Component, Prop } from '@stencil/core';
import { skillSet } from '../../common/types';

@Component({
  tag: 'app-skills-panel',
  styleUrl: 'app-skills-panel.css',
  shadow: true
})
export class AppSkillsPanel {
  @Prop() config: skillSet;

  render() {
    return (
      <div class='app-skills-panel'>
        <header>
          <app-icon icon={{ prefix: 'fal', iconName: this.config.icon}} />
          <span>{this.config.label}</span>
        </header>
        <section>
          {this.config.skillList.map((skill) => (
            <span>{skill}</span>
          ))}
        </section>
      </div>
    );
  }
}
