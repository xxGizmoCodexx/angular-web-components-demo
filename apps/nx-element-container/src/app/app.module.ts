import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
// import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { CardModule } from '@nx-demos/ui/controls/card'
import { MapWidgetModule } from '@nx-demos/ui/controls/map-widget'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { TestContainerComponent } from './test-element/test-container/test-container.component';
// import { TestContainerBodyComponent } from './test-element/test-container-body/test-container-body.component';
// import { TestContainerHeaderComponent } from './test-element/test-container-header/test-container-header.component';
import { TestElementModule } from './test-element/test-element.module';

// import { AppComponent } from './app.component';

@NgModule({
  // declarations: [CardContainerComponent, CardBodyComponent, CardHeaderComponent],
  // entryComponents: [CardContainerComponent, CardBodyComponent, CardHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // TestElementModule,
    CardModule,
    MapWidgetModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    // private injector: Injector
    ) {
  }
  ngDoBootstrap(){
    
  }

  // ngDoBootstrap() {
  //   console.log("Registering elements")
  //   try {
  //     if (window.customElements.get("external-card-container")) {
  //       console.log("Element already defined, skipping...")
  //       return;
  //     }

  //     // const strategyFactoryContainer = new ElementZoneStrategyFactory(CardContainerComponent, this.injector);
  //     // const externalTileCE = createCustomElement(CardContainerComponent, { injector: this.injector, strategyFactory : strategyFactoryContainer });
  //     // customElements.define('external-card-container', externalTileCE);



  //     // const strategyFactoryHeader = new ElementZoneStrategyFactory(CardHeaderComponent, this.injector);
  //     // const cardHeader = createCustomElement(CardHeaderComponent, { injector: this.injector, strategyFactory : strategyFactoryHeader  });
  //     // customElements.define('nx-demos-card-header', cardHeader);

  //     // const strategyFactoryBody = new ElementZoneStrategyFactory(CardBodyComponent, this.injector);
  //     // const cardBody = createCustomElement(CardBodyComponent, { injector: this.injector, strategyFactory : strategyFactoryBody });
  //     // customElements.define('nx-demos-card-body', cardBody);

  //     const strategyFactoryHeader = new ElementZoneStrategyFactory(TestContainerHeaderComponent, this.injector);
  //     const cardHeader = createCustomElement(TestContainerHeaderComponent, { injector: this.injector, strategyFactory: strategyFactoryHeader });
  //     customElements.define('nx-demos-test-container-header', cardHeader);

  //     const strategyFactoryBody = new ElementZoneStrategyFactory(TestContainerBodyComponent, this.injector);
  //     const cardBody = createCustomElement(TestContainerBodyComponent, { injector: this.injector, strategyFactory: strategyFactoryBody });
  //     customElements.define('nx-demos-test-container-body', cardBody);

  //     const strategyFactoryContainer = new ElementZoneStrategyFactory(TestContainerComponent, this.injector);
  //     const externalTileCE = createCustomElement(TestContainerComponent, { injector: this.injector, strategyFactory: strategyFactoryContainer });
  //     customElements.define('external-card-container', externalTileCE);

  //   } catch (error) {
  //     console.error(`Failed registering elements: ${error}`)
  //   }

  // }
}
