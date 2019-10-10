import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {LoggerService} from '@nx-demos/shared/services'

import { GridsterModule } from 'angular-gridster2';


// import {CardModule} from '@bit/arnobornman.demo-angular-controls.card'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GridsterModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
