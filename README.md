# NzBsModal

Bootstrap modal library for Angular 6. Built on top of the Bootstrap js, with full support for modal styling, animations, options and events.

[Demo Site](https://nowzoo.github.io/nz-bs-modal)

**NB:** By design this library depends on jQuery, popper.js, bootstrap.js and bootstrap.css. You need to include those scripts and styles in your build. If you are looking for a native Angular implementation, look at [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) or [ng-bootstrap](https://ng-bootstrap.github.io).

## Get Started
### Install the Library &amp; Dependencies
```bash
npm i --save nzbs-modal jQuery popper.js bootstrap
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

The library comes with:
 - The `NzBsModalService` [code](https://github.com/nowzoo/nz-bs-modal/blob/master/projects/nz-bs-modal/src/lib/nz-bs-modal.service.ts) which your components will use to show modals. The service's `show()` method returns an instance of `INzBsModalInstance`, which has properties and methods to manipulate the modal once it is shown.
 - The `NzBsModalComponent`. You only need one of these in your app, and it should be placed as high up in the DOM as possible, for example, at the end of your `AppComponent` template. You can pass in some default options if you don't like the built in ones. After that, you really don't have to worry about it.

#### Import the ModalModule in your app module

We only want to have one instance of the Modal Service, so call `NzBsModalComponent.forRoot()`.

```ts
// src/app/app.module.ts
import { NzBsModalModule } from 'nzbs-modal';

@NgModule({
  imports: [
    // other imports
    NzBsModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
[Full example](https://github.com/nowzoo/nz-bs-modal/blob/master/src/app/app.module.ts#L1).

#### Add the ModalComponent to your app component
Insert the component selector `<nz-bs-modal></nz-bs-modal>` at the bottom of `app.component.html`.
```html
<!-- app.component.html -->
<div style="padding-top:56px">
  <router-outlet></router-outlet>
</div>
<nz-bs-modal></nz-bs-modal>
```
[Full example](https://github.com/nowzoo/nz-bs-modal/blob/master/src/app/app.component.html#L1).

#### Minimal Example: Use the service to display modals from other components

[Demo Source](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/minimal)

First, add an `<ng-template>` to your component's template. Make sure to reference it with a template reference variable, e.g. `#modal`. It should probably contain at least a `.modal-body` div.

```html
<!-- minimal.component.html -->
<div class="d-flex align-items-center mb-2">
  <div>
    <button type="button" class="btn btn-primary btn-lg" (click)="showModal()">
      Show Modal
    </button>
  </div>
</div>
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

Instantiate your component class with the `NzBsModalService` and a reference to the modal template and provide some method to show the modal...
```ts
// minimal.component.ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzBsModalService } from 'nzbs-modal';
@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss']
})
export class MinimalComponent {

  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(
    private modalService: NzBsModalService
  ) { }

  showModal() {
    this.modalService.show(this.modal);
  }
}
```

Note: In the minimal example above, we used the native Bootstrap `data-dismiss="modal"` attribute to close the modal. Modals can also be closed programmatically, for example, after a successful form submission. `ModalService.show()` returns an instance of `IModalInstance`, which comes with a `hide()` method.


## API

### `INzBsModalInstance`
This is what the modal service returns from the `show()` method. This interface exposes several methods and properties to manipulate the modal after it is shown.

- `events: EventEmitter<Event>` exposes the native Bootstrap modal events.
[Demo](https://nowzoo.github.io/nz-bs-modal/#events) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/events)
- `handleUpdate(): void` exposes the native Bootstrap method. You should call this whenever the height of your modal content changes.
[Demo](https://nowzoo.github.io/nz-bs-modal/#handle-update) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/handle-update)
- `shown(): Promise<void>` returns a promise that resolves when the modal is completely shown.
- `hidden(): Promise<void>` returns a promise that resolves when the modal is completely hidden.
- `hide(): void` hides the modal programmatically.
[Demo for shown(), hidden() and hide()](https://nowzoo.github.io/nz-bs-modal/#prove-you-can-add) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/prove-you-can-add)


### `INzBsModalOptions`
The set of options that you can pass into the service's `show()` method. You can also pass your own defaults into the `NzBsModalComponent` instance if you don't like the following defaults.

Note: All of the [Bootstrap modal options and classes](http://getbootstrap.com/docs/4.1/components/modal) except `show` are supported. In addition, we add the Angular-specific `dismissOnRouteChange` option.

Note: All of the following keys are optional.

- `animate?: boolean` **Default:** `true`. Whether or not to animate the modal in and out.
[Demo](https://nowzoo.github.io/nz-bs-modal/#animate) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/animate)
- `size?: 'sm' | 'lg' | null` **Default:** `null`. The size of the modal.
[Demo](https://nowzoo.github.io/nz-bs-modal/#size) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/size)
- `centered?: boolean` **Default:** `false`. Whether to center the modal vertically in the viewport.
[Demo](https://nowzoo.github.io/nz-bs-modal/#centered) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/centered)
- `backdrop?: boolean | 'static'` **Default:** `true`. Whether to display a backdrop, and if so whether clicking on it dismisses the modal.  [Demo](https://nowzoo.github.io/nz-bs-modal/#backdrop) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/backdrop)
    - `true` &mdash;  backdrop dismisses the modal
    - `static` &mdash; backdrop doesn't dismiss
    - `false` &mdash; no backdrop

- `keyboard?: boolean` **Default:** `true`. Whether or not pressing the `esc` key dismisses the modal.
[Demo](https://nowzoo.github.io/nz-bs-modal/#keyboard) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/keyboard)
- `focus?: boolean` **Default:** `true`. Whether or not to focus the modal when shown. Note that you can also use the `modalInstance.shown()` promise to automatically focus inputs within the modal.
[Demo](https://nowzoo.github.io/nz-bs-modal/#focus) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/focus)
- `dismissOnRouteChange?: boolean`  **Default**: `true`. whether or not to dismiss the modal when the route changes.
[Demo](https://nowzoo.github.io/nz-bs-modal/#dismissOnRouteChange) |
[Demo code](https://github.com/nowzoo/nz-bs-modal/tree/master/src/app/demos/dismiss-on-route-change)

### `NzBsModalComponent`
This is the "singleton" component that you should place near the top of the DOM. It only has one input:
- `@Input() defaultOptions: INzBsModalOptions` Use this if to globally override the default options shown above.

### `NzBsModalService`
The service for showing modals.
- `show(templateRef: TemplateRef<any>, options?: INzBsModalOptions): INzBsModalInstance` Show a modal given a template and (optionally) a modal options object.
- `getLabelledById(): string` This is meant to allow you to set the id of the `<h5 class="modal-title">Title</h5>`, so as to match the modal element's `aria-labelledby` attribute. See [Bootstrap modal accessibility](http://getbootstrap.com/docs/4.1/components/modal/#accessibility).



## Contributing
Contributions are welcome. Clone this repo to develop.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

**NB** Library support in the CLI is (IMHO) still a work in progress and less than intuitive. Any ideas on how to restructure the project are more than welcome.

- The library code is found in `projects/nz-bs-modal/src`
- The demo code (i.e., the app) is found in `app/src`
- In order to develop both the library and and the demo code simultaneously, change all the library imports in the demo code from `nzbs-modal` (which should pick up the node module) to `@nzbs-modal` (which is defined as a path in `tsconfig.json`.)
- Run `ng test nz-bs-modal` to execute the unit tests for the library

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
