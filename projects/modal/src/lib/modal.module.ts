import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBsModalComponent } from './modal.component';
import { NzBsModalService } from './modal.service';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [NzBsModalComponent],
  exports: [NzBsModalComponent],
  providers: [NzBsModalService]
})
export class NzBsModalModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: NzBsModalModule, providers: [
      NzBsModalService
    ]};
  }
}
