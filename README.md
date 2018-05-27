# NzBsModal

Bootstrap modal library for Angular 6. Built on top of the Bootstrap js, with full support for modal styling, animations, options and events.


**NB:** By design this library depends on jQuery, popper.js, bootstrap.js and bootstrap.css. You need to include those scripts and styles in your build. If you are looking for a native Angular implementation, look at [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) or [ng-bootstrap](https://ng-bootstrap.github.io).

## Get Started
### Install the Library &amp; Dependencies
```bash
npm i --save nz-bs-modal jQuery popper.js bootstrap
```
### Include the JS and CSS Dependencies in Your Build

Add the following entries in the `styles` and `scripts` sections of your project in `angular.json`. [Real-life example](https://github.com/nowzoo/nz-bs-modal/blob/master/angular.json#L32).
```json
"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

```

Alternately, you can include the Bootstrap styles in your app stylesheet...

```scss
// src/styles.scss...
@import "~bootstrap/scss/bootstrap";
// more styles...
```

### Import ModalModule

```ts
// src/app/app.module.ts
import { ModalModule } from 'modal';

@NgModule({
  imports: [
    // other imports
    ModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```



- Define a modal using `<ng-template>`.
- Show the modal from a parent component with `modalService.show(myTemplate, myOptions)`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
