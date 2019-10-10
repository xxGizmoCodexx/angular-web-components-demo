import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { SignalrClientService } from '@nx-demos/shared/services';

interface MapMessageInterface {
  messageId: string;
  messagePayload: string;
  messageType: string;
  responseStatus: number;
  responseUtc: string;
  sourceMessageId: string;
}

@Component({
  selector: 'nx-demos-map-widget-container',
  templateUrl: './map-widget-container.component.html',
  styleUrls: ['./map-widget-container.component.scss'],
  providers: [SignalrClientService]
})
export class MapWidgetContainerComponent implements OnInit {

  private accessToken = "YOUR MAPBOX API KEY HERE..."

  public mapId = `map${Math.floor(Math.random() * 10000)}`

  @Output()
  public mapUpdated = new EventEmitter<string>()

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(
    private signalRClient: SignalrClientService
  ) { }

  private connect_async() {
    return new Promise<any>((resolve) => {
      // resolve()
      this.signalRClient.connect("http://localhost:5000/raptor").then(() => {
        this.signalRClient.registerMethodListener('receiveMessage');
        this.signalRClient.receivedMessage$.subscribe((message: MapMessageInterface) => {
          try {
            if (this.map.getLayer("points")) {
              this.map.removeLayer("points");
              this.map.triggerRepaint();
            }
            const res = JSON.parse(message.messagePayload)
            this.mapUpdated.next(JSON.stringify(res));
            this.map.addLayer({
              "id": `points${res.lat}`,
              "type": "symbol",
              "source": {
                "type": "geojson",
                "data": {
                  "type": "FeatureCollection",
                  "features": [{
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [res.lat, res.long]
                    },
                    "properties": {
                      "title": `GPS : [${res.lat}] | [${res.long}]  `,
                      "icon": "monument"
                    }
                  }]
                }
              },
              "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
              }
            });
            this.map.triggerRepaint();
          } catch (error) {

          }
        });
        resolve()
      })
        .catch((err) => console.error(err));
    })
  }

  private initMap(): void {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYXJub2Jvcm5tYW4iLCJhIjoiY2sxNmZ1NHY3MDNpYTNobGxhMHA1cmtrYiJ9.AbdIKYTIAhpMtIJ1fWjufw';
    console.log(this.mapId)
    this.map = new mapboxgl.Map({
      container: this.mapId,
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-25.863800, 28.208791],
      center: [28.208791, -25.863800],
      zoom: 15
    });
    const self = this;
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', function () {

      self.map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [28.208791, -25.863800]
              },
              "properties": {
                "title": "Mapbox DC",
                "icon": "monument"
              }
            }]
          }
        },
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
    });
  }

  ngOnInit() {
    this.connect_async().then(() => {
      this.initMap();
    })
    .catch(err => console.error(err));
  }
}
