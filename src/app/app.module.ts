import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
//import { UnsubscribeRxjsComponent } from './unsubscribe-rxjs/unsubscribe-rxjs.component';
//import { UnsubscribeComponent } from './unsubscribe-poc/unsubscribe/unsubscribe.component';
//import { UnsubscribPocComponent } from './unsubscrib-poc/unsubscrib-poc.component';
//import { PocBaseComponent } from './poc-base/poc-base.component';

@NgModule({
  declarations: [AppComponent,
     CursosComponent, 
//     UnsubscribeRxjsComponent, 
//     UnsubscribeComponent, 
  //   UnsubscribPocComponent,
    //  PocBaseComponent
  ],

  imports: [
    BrowserModule,
   //  AppRoutingModule,
      HttpClientModule,
    ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
