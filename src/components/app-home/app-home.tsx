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
        <p>
          🛠Under Construction🛠
          <fontawesome-icon icon='user-astronaut' />
        </p>
        <browser-preview />
        <browser-preview />
        <browser-preview />
      </div>
    );
  }
}
