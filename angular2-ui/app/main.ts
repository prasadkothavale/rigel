import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// UNCOMMENT BELOW TWO LINES TO ENABLE PROD MODE
// import {enableProdMode} from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
