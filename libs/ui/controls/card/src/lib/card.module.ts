import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';
// // RECOMMENDED
// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { createCustomElement } from '@angular/elements'

@NgModule({
  imports: [
    CommonModule,
    // AccordionModule.forRoot(),
    MatExpansionModule,
    MatButtonModule
  ],
  declarations: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],
  exports: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],
  entryComponents: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardModule {

  constructor(
    private injector: Injector
  ){
    console.log("Registering elements")
    try {
      if (window.customElements.get("external-card-container")) {
        console.log("Element already defined, skipping...")
        return;
      }

      const strategyFactoryHeader = new ElementZoneStrategyFactory(CardHeaderComponent, this.injector);
      const cardHeaderElement = createCustomElement(CardHeaderComponent, { injector: this.injector, strategyFactory: strategyFactoryHeader });
      customElements.define('nx-demos-card-header', cardHeaderElement);

      const strategyFactoryBody = new ElementZoneStrategyFactory(CardBodyComponent, this.injector);
      const cardBodyElement = createCustomElement(CardBodyComponent, { injector: this.injector, strategyFactory: strategyFactoryBody });
      customElements.define('nx-demos-card-body', cardBodyElement);

      const strategyFactoryContainer = new ElementZoneStrategyFactory(CardContainerComponent, this.injector);
      const cardContainerElement = createCustomElement(CardContainerComponent, { injector: this.injector, strategyFactory: strategyFactoryContainer });
      customElements.define('external-card-container', cardContainerElement);

    } catch (error) {
      console.error(`Failed registering elements: ${error}`)
    }
  }
}
