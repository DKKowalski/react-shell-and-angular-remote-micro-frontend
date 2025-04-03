// // import 'zone.js'
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

import 'zone.js';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Router } from '@angular/router';

(async () => {
  const app = await createApplication(appConfig);
  const appElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('my-marketing-app', appElement);
  const router = app.injector.get(Router);
  router.initialNavigation();
})();
