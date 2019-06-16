import { h, Component, Prop } from '@stencil/core';
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
      <div class='app-skills'>
        {this.skills.map((skillSet) => (
          <app-skills-panel config={skillSet} />
        ))}
      </div>
    );
  }
}
