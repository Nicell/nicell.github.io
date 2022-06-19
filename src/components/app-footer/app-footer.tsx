import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: false
})
export class AppFooter {
  render() {
    return (
      <footer class="app-footer">
        <p>nick.winans.io © {new Date().getFullYear()}</p>
        <p>powered by <a target="_blank" rel="noopener" href="https://stenciljs.com">Stencil.js</a> and <a target="blank" rel="noopener" href="https://github.com/Nicell/nicell.github.io">GitHub Pages</a></p>
      </footer>
    );
  }
}
