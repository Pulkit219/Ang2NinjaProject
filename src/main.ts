import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { LoggingService } from './app/logging.service';
import { HttpModule, RequestOptions } from '@angular/http';
import { DataService } from './app/data.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [LoggingService,HttpModule, RequestOptions,DataService]);
