import { Component, h } from '@stencil/core';
import { config } from '../../common/config';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <app-section>
          <app-about config={config.links} />
        </app-section>
        <app-section>
          <app-skills skills={config.skills} />
        </app-section>
          {config.projects.map((project) => (
            <app-section>
              <app-project config={project} />
            </app-section>
          ))}
        <app-section>
          <app-footer />
        </app-section>
        <app-update />
      </div>
    );
  }
}
