import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <app-section dark>
          <p>
            🛠Under Construction🛠
            <fontawesome-icon icon='user-astronaut' />
          </p>
        </app-section>
        <app-section>
          <skills-section />
        </app-section>
        <app-section dark>
          <browser-preview site='hlpugs' direction='left' />
        </app-section>
        <app-section>
          <browser-preview site='letstutor' direction='right' />
        </app-section>
        <app-section dark>
          <browser-preview direction='left' />
        </app-section>
      </div>
    );
  }
}
