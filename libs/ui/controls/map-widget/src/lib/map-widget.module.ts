import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapWidgetContainerComponent } from './components/map-widget-container/map-widget-container.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';
import {SignalrClientService} from '@nx-demos/shared/services'

@NgModule({
  imports: [CommonModule],
  declarations: [MapWidgetContainerComponent],
  entryComponents: [MapWidgetContainerComponent],
  // providers : [
  //   SignalrClientService
  // ]
})
export class MapWidgetModule {
  constructor(
    private injector: Injector
  ){
    console.log("Registering map element")
    try {
      if (window.customElements.get("map-widget")) {
        console.log("Element already defined, skipping...")
        return;
      }
      const styleSheet = document.createElement('link');
      // script.src = 'assets/custom-elements.js';
      styleSheet.href = 'https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css';
      styleSheet.rel = "stylesheet"
      // script.src = 'http://192.168.13.222/main.js';
      document.body.appendChild(styleSheet);

      const strategyFactoryContainer = new ElementZoneStrategyFactory(MapWidgetContainerComponent, this.injector);
      const externalTileCE = createCustomElement(MapWidgetContainerComponent, { injector: this.injector, strategyFactory: strategyFactoryContainer });
      customElements.define('map-widget', externalTileCE);

    } catch (error) {
      console.error(`Failed registering elements: ${error}`)
    }
  }
}
