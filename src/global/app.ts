import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindow, faServer, faCogs } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope as farEnvelope, faSparkles } from '@fortawesome/pro-regular-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faGithub, faReddit, faTwitch, faSteam, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'intersection-observer';
import 'nice-anim';

WebFont.load({
  google: {
    families: ['Inconsolata', 'Source Sans Pro']
  }
});

library.add(farEnvelope, fasEnvelope, faWindow, faServer, faCogs, faSparkles, faGithub, faReddit, faTwitch, faSteam, faLinkedin);
