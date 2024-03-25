import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { NgModule } from '@angular/core';
import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    provideFirebaseApp(() => app),
    AngularFireModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
