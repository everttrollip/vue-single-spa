import { registerApplication, start } from 'single-spa';

// Simple usage
// registerApplication(
//   'app',
//   () => import('src/main.js'),
//   (location) => location.pathname.startsWith('/'),
//   { some: 'value' }
// );

// Config with more expressive API
registerApplication({
  name: 'app',
  app: () => import('src/main.js'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  }
});

start();