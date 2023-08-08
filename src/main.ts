import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
} from '@microsoft/fast-components';

provideFASTDesignSystem().register(fastCard(), fastButton(), fastTextField());
