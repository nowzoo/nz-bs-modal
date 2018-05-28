import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../../projects/modal/src/public_api';

import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { OtherRouteComponent } from './other-route/other-route.component';
import { AnimationComponent } from './demos/animation/animation.component';
import { CenteredComponent } from './demos/centered/centered.component';
import { SizeComponent } from './demos/size/size.component';
import { BackdropComponent } from './demos/backdrop/backdrop.component';
import { KeyboardComponent } from './demos/keyboard/keyboard.component';
import { FocusComponent } from './demos/focus/focus.component';
import { DismissOnRouteChangeComponent } from './demos/dismiss-on-route-change/dismiss-on-route-change.component';
import { MinimalComponent } from './demos/minimal/minimal.component';
import { ProveYouCanAddComponent } from './demos/prove-you-can-add/prove-you-can-add.component';
import { EventsComponent } from './demos/events/events.component';
import { HandleUpdateComponent } from './demos/handle-update/handle-update.component';

const routes: Routes = [
  {path: '', component: HomeRouteComponent},
  {path: 'other', component: OtherRouteComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    OtherRouteComponent,
    AnimationComponent,
    CenteredComponent,
    SizeComponent,
    BackdropComponent,
    KeyboardComponent,
    FocusComponent,
    DismissOnRouteChangeComponent,
    MinimalComponent,
    ProveYouCanAddComponent,
    EventsComponent,
    HandleUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
