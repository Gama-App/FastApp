import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyArQYRHcfCdrZ7s_Xbjs7FYt-LIdM2fgHQ",
    authDomain: "agenda-c1108.firebaseapp.com",
    databaseURL: "https://agenda-c1108.firebaseio.com",
    storageBucket: "agenda-c1108.appspot.com",
    messagingSenderId: "343182103708"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
