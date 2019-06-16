import { h, Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'app-anim',
  styleUrl: 'app-anim.css',
  shadow: false
})
export class AppAnim {
  @Element() el: HTMLElement;
  @Prop() anim: 'up' | 'right' | 'left' = 'up';
  @Prop() delay: number = 0;
  @Prop() duration: number = 500;
  @Prop() distance: string = '30%';
  @Prop() trigger: string = '33%';

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
    (this.el.querySelector('.app-anim') as HTMLElement).style.setProperty('--distance', this.distance);
  }

  addIntersectionObserver() {
    this.io = new IntersectionObserver((data: any) => {
      if (data[0].isIntersecting) {
        this.el.querySelector('.app-anim').classList.add(`slide-${this.anim}`);
      }
    });

    this.io.observe(this.el.querySelector('.trigger'));
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <div
        class={`app-anim ${this.anim}`}
        style={{
          animationDuration: `${this.duration}ms`,
          animationDelay: `${this.delay}ms`
        }}
      >
        <slot />
        <div class='trigger' style={{top: this.trigger}}></div>
      </div>
    );
  }
}
