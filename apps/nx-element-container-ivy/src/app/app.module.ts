import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CardModule } from '@nx-demos/ui/controls/card'
import { MapWidgetModule } from '@nx-demos/ui/controls/map-widget'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    MapWidgetModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(
    // private injector: Injector
  ) {
  }

  ngDoBootstrap() {
    // console.log('Bootstrapping elements');
    // try {
    //   const externalTileCE = createCustomElement(CardContainerComponent, { injector: this.injector });
    //   customElements.define('external-card-container', externalTileCE);
    //   const cardHeader = createCustomElement(CardHeaderComponent, { injector: this.injector });
    //   customElements.define('nx-demos-card-header', cardHeader);
    //   const cardBody = createCustomElement(CardBodyComponent, { injector: this.injector });
    //   customElements.define('nx-demos-card-body', cardBody);
    // } catch (error) {
    //   console.error(`Failed registering elements: ${error}`)
    // }
  }
}
