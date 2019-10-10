import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestContainerComponent } from './test-container/test-container.component';
import { TestContainerBodyComponent } from './test-container-body/test-container-body.component';
import { TestContainerHeaderComponent } from './test-container-header/test-container-header.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
  ],
  declarations: [TestContainerComponent, TestContainerBodyComponent, TestContainerHeaderComponent],
  entryComponents: [TestContainerComponent, TestContainerBodyComponent, TestContainerHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestElementModule { 
  constructor(
    private injector: Injector
  ){
    console.log("Registering elements")
    try {
      if (window.customElements.get("external-card-container")) {
        console.log("Element already defined, skipping...")
        return;
      }

      const strategyFactoryHeader = new ElementZoneStrategyFactory(TestContainerHeaderComponent, this.injector);
      const cardHeader = createCustomElement(TestContainerHeaderComponent, { injector: this.injector, strategyFactory: strategyFactoryHeader });
      customElements.define('nx-demos-test-container-header', cardHeader);

      const strategyFactoryBody = new ElementZoneStrategyFactory(TestContainerBodyComponent, this.injector);
      const cardBody = createCustomElement(TestContainerBodyComponent, { injector: this.injector, strategyFactory: strategyFactoryBody });
      customElements.define('nx-demos-test-container-body', cardBody);

      const strategyFactoryContainer = new ElementZoneStrategyFactory(TestContainerComponent, this.injector);
      const externalTileCE = createCustomElement(TestContainerComponent, { injector: this.injector, strategyFactory: strategyFactoryContainer });
      customElements.define('external-card-container', externalTileCE);

    } catch (error) {
      console.error(`Failed registering elements: ${error}`)
    }
  }

}
