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

### Usage

The library comes with two things:
 - The `ModalService` which your components will use to show modals.
 - a `ModalComponent` which is meant to be a "singleton." You only need one of these in your app, and it should be placed as high up in the DOM as possible, for example, at the end of your `AppComponent` template. You can pass in some default options if you don't like the built in ones. After that, you really don't have to worry about it.

#### Import the ModalModule in your app module

We only want to have one instance of the Modal Service, so call `ModalModule.forRoot()`. [See a full example](https://github.com/nowzoo/nz-bs-modal/blob/master/src/app/app.module.ts#L1).


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


#### Add the ModalComponent to your app component
Insert the component selector `<nz-bs-modal></nz-bs-modal>` at the bottom of `app.component.html`. [Full example](https://github.com/nowzoo/nz-bs-modal/blob/master/src/app/app.component.html#L1).
```html
<!-- app.component.html -->
<div style="padding-top:56px">
  <router-outlet></router-outlet>
</div>
<nz-bs-modal></nz-bs-modal>
```
#### Minimal Example: Use the service to display modals from other components

First, add an `<ng-template>` to your component's template. Make sure to reference it with a template reference variable, e.g. `#modal`. It should contain at least a `.modal-body` div.

```html
<!-- in my.component.html -->
<p>
  <button class="btn btn-primary btn-lg" (click)="showModal()">Show Modal</button>
</p>
<ng-template #modal>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" [attr.id]="modalLabelledById">What's Up?</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hey! Here's some modal content.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary"
        data-dismiss="modal">Close Modal</button>
    </div>
  </div>
</ng-template>
```

Instantiate your component class with the `ModalService` and a reference to the modal template and provide some method to show the modal...
```ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'nzbs-modal';

@Component({
  selector: 'app-minimal-demo',
  templateUrl: './minimal-demo.component.html',
  styleUrls: ['./minimal-demo.component.scss']
})
export class MinimalDemoComponent {
  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(
    private modalService: ModalService
  ) { }

  showModal() {
    this.modalService.show(this.modal);
  }
}
```
[View full source](https://github.com/nowzoo/nz-bs-modal/blob/master/src/app/minimal-demo) for this minimal example.

 

#### Hiding a modal

In the minimal example above, we used the native Bootstrap `data-dismiss="modal"` attribute to close the modal. Modals can also be closed programmatically, for example, after a successful form submission. `ModalService.show()` returns an instance of `IModalInstance`, which comes with a `hide()` method.






## Development
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
