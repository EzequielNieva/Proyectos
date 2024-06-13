import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),IngresoServicio,EgresoServicio]
};
