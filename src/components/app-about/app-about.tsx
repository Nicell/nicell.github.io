import { h, Component, Prop } from '@stencil/core';
import { link } from '../../common/types';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout {
  @Prop() config: link[];

  render() {
    return (
      <div class='app-about'>
        <app-anim distance='100%'>
          <h1>nick.winans.codes</h1>
        </app-anim>
        <app-anim delay={100}>
          <app-img
            alt='Me'
            src='me'
            type='jpg'
          />
        </app-anim>
        <app-anim delay={200}>
          <p class='hi'>
            <span>I'm Nick.</span><span>I design and build web apps.</span>
          </p>
          <p>
            <span>People call me Nicell online.</span>
          </p>
          <p>
            I'm constantly learning, so I can refine my user interfaces, make my code easier to maintain, and optimize my deployments.
          </p>
          <p>
            You can find some of my skills and projects here.
          </p>
        </app-anim>
        <app-anim delay={300} distance='100%'>
          <div class='links'>
            {this.config.map(link => (
              <a target='_blank' rel='noopener' title={link.title} href={link.link}>
                <app-icon icon={link.icon} />
              </a>
            ))}
          </div>
        </app-anim>
        <a class='contactMe' target='_blank' href='mailto:nick@winans.codes'>
          <app-icon icon={{prefix: 'far', iconName: 'envelope'}}/>
          <span>Contact Me</span>
        </a>
      </div>
    );
  }
}
