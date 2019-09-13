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
          <nice-anim delay={200} animation-distance="100%"><h1>{this.config.title}</h1></nice-anim>
          <nice-anim delay={300}><p>{this.config.description}</p></nice-anim>
          <nice-anim delay={400}>
            <div class="project-stack">
              {this.config.stack.map(technology => (
                <div class="project-technology">{technology}</div>
              ))}
            </div>
          </nice-anim>
          <nice-anim delay={500}>
            <div class="project-links">
              {this.config.github ? (
                <app-button icon={{prefix: 'fab', iconName: 'github'}} target="_blank" href={this.config.github}>GitHub Repo</app-button>
              ) : null}
              {this.config.link ? (
                <app-button icon={{prefix: 'fas', iconName: 'cubes'}} target="_blank" href={this.config.link}>View the Project</app-button>
              ) : null}
            </div>
          </nice-anim>
        </section>
      </div>
    );
  }
}
