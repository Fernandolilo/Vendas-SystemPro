import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from './service/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptor/error-interceptor';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';
import { ClienteService } from './service/domain/Cliente.service';
import { AuthInterceptorProvider } from '../interceptor/auth-interceptor';

@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,

  ]
})
export class AppModule {}
