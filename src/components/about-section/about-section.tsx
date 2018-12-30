import { Component, Element } from '@stencil/core';

@Component({
  tag: 'about-section',
  styleUrl: 'about-section.css',
  shadow: true
})
export class AboutSection {
  @Element() el: HTMLElement;

  render() {
    return (
      <div class='about-section'>
        <h1>nick.winans.codes</h1>
        <app-img
          alt='Me'
          src='me'
          type='jpg'
        />
        <p>
          Hi, I'm Nick. I'm a high school student fascinated by the web.
          Since my first website I made in 2012, I've been continually exploring all ends of web development.
          Along the way I've met great people, made meaningful projects, and learned an unbelievable amount.
        </p>
        <a href='mailto:nick@winans.codes'>Contact Me</a>
      </div>
    );
  }
}
