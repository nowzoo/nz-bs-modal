import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'nzbs-modal';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { OtherRouteComponent } from './other-route/other-route.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { MinimalDemoComponent } from './minimal-demo/minimal-demo.component';

const routes: Routes = [
  {path: '', component: HomeRouteComponent},
  {path: 'other', component: OtherRouteComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    OtherRouteComponent,
    ModalFormComponent,
    MinimalDemoComponent
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
