import { Component, Prop } from '@stencil/core';
import { skillSet } from '../../common/types';

@Component({
  tag: 'skill-panel',
  styleUrl: 'skill-panel.css',
  shadow: true
})
export class SkillPanel {

  @Prop() config: skillSet;

  render() {
    return (
      <div class='skill-panel'>
        <header>
          <fontawesome-icon icon={{ prefix: 'fal', iconName: this.config.icon}} />
          <span>{this.config.label}</span>
        </header>
        <section>
          <span>{this.config.description}</span>
          <p>Experience with:</p>
          {this.config.skillList.map((skill) => (
            <span>{skill}</span>
          ))}
        </section>
      </div>
    );
  }
}