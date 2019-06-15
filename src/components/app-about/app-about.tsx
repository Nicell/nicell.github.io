import { h, Component, Element } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout {
  @Element() el: HTMLElement;

  render() {
    return (
      <div class='app-about'>
        <app-anim>
          <h1>nick.winans.codes</h1>
        </app-anim>
        <app-anim delay={200}>
          <app-img
            alt='Me'
            src='me'
            type='jpg'
          />
        </app-anim>
        <app-anim delay={400}>
          <p>
            Hi, I'm Nick. I design and build web apps.
          </p>
          <p>
            I'm constantly learning, so I can refine my user interfaces, make my code easier to maintain, and optimize my deployments.
          </p>
          <p>
            You can find some of my skills and projects here.
          </p>
        </app-anim>
        <a target='_blank' href='mailto:nick@winans.codes'>
          <app-icon icon={{prefix: 'fal', iconName: 'envelope'}}/>
          <span>Contact Me</span>
        </a>
      </div>
    );
  }
}
