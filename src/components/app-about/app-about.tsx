import { Component, Element } from '@stencil/core';

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
            Hi, I'm Nick. I'm a high school student fascinated by the web.
            Since my first website I made in 2012, I've been continually exploring all ends of web development.
            Along the way I've met great people, made meaningful projects, and learned an unbelievable amount.
          </p>
        </app-anim>
        <a target='_blank' href='mailto:nick@winans.codes'>Contact Me</a>
      </div>
    );
  }
}
