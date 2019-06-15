import { h, Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: false
})
export class AppFooter {

  render() {
    return (
      <footer class='app-footer'>
        <footer>
          <p>nick.winans.codes © {new Date().getFullYear()}</p>
          <p>powered by <a target='_blank' href='https://stenciljs.com'>Stencil.js</a> and <a target='blank' href='https://github.com/Nicell/nicell.github.io'>GitHub Pages</a></p>
        </footer>
      </footer>
    );
  }
}
