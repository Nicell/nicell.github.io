import { Component, Prop, h } from '@stencil/core';
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
        <nice-anim
          direction={oppositeDir}
          duration={1000}
          animation-distance={`100%`}
        >
          <app-browser-preview site={this.config.image} direction={this.config.direction} />
        </nice-anim>
        <section>
          <nice-anim delay={200} animation-distance='100%'><h1>{this.config.title}</h1></nice-anim>
          <nice-anim delay={300}><p>{this.config.description}</p></nice-anim>
        </section>
      </div>
    );
  }
}
