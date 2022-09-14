import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import  environment  from './environnement';

const firebaseConfig = {
  apiKey: "AIzaSyBN0IfvdJub1L8_YwiOV3trQBCNGDC4Euo",
  authDomain: "test2-33c37.firebaseapp.com",
  projectId: "test2-33c37",
  storageBucket: "test2-33c37.appspot.com",
  messagingSenderId: "492262252737",
  appId: "1:492262252737:web:5f375be4e737100ac3f440",
  measurementId: "G-900WDEYZGS"
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
