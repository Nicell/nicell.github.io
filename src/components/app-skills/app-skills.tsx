import { Component, Prop, h } from '@stencil/core';
import { skillSet } from '../../common/types';

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.css',
  shadow: true
})
export class AppSkills {
  @Prop() skills: skillSet[];

  render() {
    return (
      <nice-anim delay={400} trigger-distance='0%' animation-distance='10%'>
        <div class='app-skills'>
          {this.skills.map((skillSet) => (
            <app-skills-panel config={skillSet} />
          ))}
        </div>
      </nice-anim>
    );
  }
}
