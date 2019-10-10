import { Component, OnInit, ChangeDetectorRef, NgZone, Injector } from '@angular/core';
import { LoggerService } from '@nx-demos/shared/services'
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterDraggable } from 'angular-gridster2/lib/gridsterDraggable.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'nx-demos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nx-controls-demo';

  registeredElements = [];

  public cardText = "Device list:"


  public elementEvents = [];

  public widgets: GridsterItem[] = [];

  public options: GridsterConfig;
  public dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }


  constructor(
    private sharedLogger: LoggerService,
  ) {
  }

  ngOnInit(): void {
    this.sharedLogger.logInfo("Shared logger started")
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };

    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0, dragEnabled: false, resizeEnabled: true },
      { cols: 1, rows: 1, y: 0, x: 1, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 1, y: 0, x: 2, dragEnabled: false, resizeEnabled: true },
      { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 1, y: 1, x: 1, dragEnabled: false, resizeEnabled: true },
      { cols: 1, rows: 1, y: 1, x: 2, dragEnabled: true, resizeEnabled: true }
    ];
  }

  public logEvent(data: string) {
    console.warn(data);
  }

  public addMinion() {

    if (!document.getElementById("external-card-container-script")) {
      // add script tag
      const script = document.createElement('script');
      // script.src = 'assets/custom-elements.js';
      script.src = 'http://localhost:8080/main.js';
      script.id = "external-card-container-script"
      // script.src = 'http://192.168.13.222/main.js';
      document.body.appendChild(script);
    }
    // this.widgets.push(Math.random())

    // add web component
    const card = document.createElement('external-card-container');
    card['contentText'] = "Test remote header text"
    card['headerText'] = "Test remote header text"
    card.addEventListener('itemClicked', (data: CustomEvent) => {
      this.logEvent(data.detail);
    });
    // // card.setAttribute('header-text', 'Test text');
    // // card.setAttribute('body-text', 'All the other bodies');

    const content = document.getElementById('content');
    content.appendChild(card);
    try {
      (<any>card).changeMode("Power saver")
    } catch (error) {

    }
    (<any>card).registerServices(this.sharedLogger)

  }

  public changeHeaders() {
    const cardElements = document.getElementsByTagName("external-card-container");
    for (let index = 0; index < cardElements.length; index++) {
      const cardElement = cardElements.item(index);
      cardElement.setAttribute("header-text", this.cardText);
      (cardElement as any).registerServices(this.sharedLogger)
    }

  }

  private subscribeToMapEvents() {
    const mapsElements = document.getElementsByTagName("map-widget");
    for (let index = 0; index < mapsElements.length; index++) {
      const mapElement = mapsElements.item(index)
      mapElement.addEventListener("mapUpdated", (data: CustomEvent) => {
        console.log(`Map element updated : ${data.detail}`);
        this.elementEvents.push(`Map element ${mapElement.id} updated : ${data.detail}`)
      })
    }
  }

  public loadWebElements() {
    if (!document.getElementById("elements-bundle-script")) {
      // add script tag
      const script = document.createElement('script');
      script.src = 'http://localhost:8080/main.js';
      script.id = "elements-bundle-script"
      // script.src = 'http://192.168.13.222/main.js';
      script.onload = () => { console.log('Web component loaded') }
      script.onerror = (err) => { console.error(err) }
      document.body.appendChild(script);
    }
    this.subscribeToMapEvents();
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ cols: 1, rows: 1, x: 1, y: 1, dragEnabled: true });
  }

  addModule() {
    this.dashboard.push({ cols: 1, rows: 1, x: 1, y: 1, dragEnabled: true })
  }
}
