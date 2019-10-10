# Webcomponents demo 
##  with Angular Elements

## Getting started

1. `git clone` the project locally
2. cd `angular-web-components-demo`
3. Install depedencies : `npm i`
4. Build the web-componens : `npm run build:elements`
5. Copy the build output form `elements/main.js` to a web server ( default is http://localhost:8080 )
    - If you have a different URL you'll have to change the import location in  `apps/nx-controls-demo/src/app/app.component.ts`
    ```typescript
    public loadWebElements() {
        if (!document.getElementById("elements-bundle-script")) {
        // add script tag
        const script = document.createElement('script');
        script.src = 'http://localhost:8080/main.js'; //Default
        // script.src = 'YOUR main.js URL HERE';
        script.id = "elements-bundle-script"
        script.onload = () => { console.log('Web component loaded') }
        script.onerror = (err) => { console.error(err) }
        document.body.appendChild(script);
        }
        this.subscribeToMapEvents();
    }
    ```
6. Run the demo container app: `ng s`
7. Open the demo at http://localhost:4200
8. (Each time you update one of the webcomponents, repeat step 4 & 5)

### PS:
You will need to register with Mapbox and get an API key to make the map widget load the demo content

Edit : `libs\ui\controls\map-widget\src\lib\components\map-widget-container\map-widget-container.component.ts`

```typescript
export class MapWidgetContainerComponent implements OnInit {

  private accessToken = "YOUR MAPBOX API KEY HERE..."

  public mapId = `map${Math.floor(Math.random() * 10000)}`
  
  ...
```

## Reference material
- https://www.webcomponents.org/ - Web Component web standard & info

- https://angular.io/guide/elements - Angular API for creating web components

- https://stenciljs.com/ - 3rd party option for developing web components

## 3rd Party libs used for demo
- https://docs.mapbox.com/mapbox-gl-js/api/ - Mapbox JS AP
- https://material.angular.io/guide/getting-started - Angular Material UI 

# NxDemos

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-demos/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
