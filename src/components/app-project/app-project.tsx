import { Component, Prop } from '@stencil/core';
import { project } from '../../common/types';

@Component({
  tag: 'app-project',
  styleUrl: 'app-project.css',
  shadow: true
})
export class AppProject {

  @Prop() config: project;

  render() {
    return (
      <div class={`app-project ${this.config.direction}`}>
        <browser-preview site={this.config.image} direction={this.config.direction} />
        <section>
          <h1>{this.config.title}</h1>
          <p>{this.config.description}</p>
        </section>
      </div>
    );
  }
}
