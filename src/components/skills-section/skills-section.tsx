import { Component } from '@stencil/core';

@Component({
  tag: 'skills-section',
  styleUrl: 'skills-section.css',
  shadow: true
})
export class SkillsSection {

  render() {
    return (
      <div class='skills-section'>
        <skill-panel />
        <skill-panel />
        <skill-panel />
      </div>
    );
  }
}