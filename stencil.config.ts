import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://nick.winans.io'
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ]
};
