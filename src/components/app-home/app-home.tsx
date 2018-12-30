import { Component } from '@stencil/core';
import { config } from '../../common/config';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <app-section>
          <about-section />
        </app-section>
        <app-section>
          <skills-section skills={config.skills} />
        </app-section>
        {config.projects.map((project) => (
          <app-section>
            <app-project config={project} />
          </app-section>
        ))}
        <app-section>
          <footer>
            <p>nick.winans.codes © {new Date().getFullYear()}</p>
            <p>powered by <a target='blank' href='https://stenciljs.com'>Stencil.js</a> and <a target='blank' href='https://github.com/Nicell/nicell.github.io'>GitHub Pages</a></p>
          </footer>
        </app-section>
      </div>
    );
  }
}
