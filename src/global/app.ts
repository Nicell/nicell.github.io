import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindow, faServer, faCogs } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope, faSparkles } from '@fortawesome/pro-regular-svg-icons';
import 'intersection-observer';

WebFont.load({
  google: {
    families: ['Inconsolata', 'Source Sans Pro']
  }
});

library.add(faEnvelope, faWindow, faServer, faCogs, faSparkles);
