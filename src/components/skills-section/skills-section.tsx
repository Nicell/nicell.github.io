import { Component, Prop } from '@stencil/core';
import { skillSet } from '../../common/types';

@Component({
  tag: 'skills-section',
  styleUrl: 'skills-section.css',
  shadow: true
})
export class SkillsSection {

  @Prop() skills: skillSet[];

  render() {
    return (
      <div class='skills-section'>
        {this.skills.map((skillSet) => (
          <skill-panel config={skillSet} />
        ))}
      </div>
    );
  }
}
