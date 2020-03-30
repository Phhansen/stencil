import { Config } from '../../internal';
// import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'HelloWorld',
  outputTargets: [
    { type: 'dist' },
    { type: 'dist-custom-elements-bundle' },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://helloworld.stencil.js.com/',
    },
  ],
  // plugins: [sass()],
  enableCache: false,
  hydratedFlag: null,
  hashFileNames: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
  },
};
