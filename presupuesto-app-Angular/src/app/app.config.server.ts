import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    IngresoServicio,
    EgresoServicio
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
