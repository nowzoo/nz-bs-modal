import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: ModalModule, providers: [
      ModalService
    ]};
  }
}
