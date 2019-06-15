import { h, Component, Prop } from '@stencil/core';
import { project } from '../../common/types';

@Component({
  tag: 'app-project',
  styleUrl: 'app-project.css',
  shadow: true
})
export class AppProject {

  @Prop() config: project;

  render() {
    const oppositeDir: 'left' | 'right' = this.config.direction === 'right' || window.innerWidth <= 768 ? 'left' : 'right';

    return (
      <div class={`app-project ${this.config.direction}`}>
        <app-anim
          anim={oppositeDir}
          duration={1000}
          distance={`${oppositeDir === 'right' ? '-' : ''}100%`}
        >
          <app-browser-preview site={this.config.image} direction={this.config.direction} />
        </app-anim>
        <section>
          <app-anim delay={200}><h1>{this.config.title}</h1></app-anim>
          <app-anim delay={300}><p>{this.config.description}</p></app-anim>
        </section>
      </div>
    );
  }
}
