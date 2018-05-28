import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demos = [
    {hash: 'minimal', label: 'Minimal'},
    {hash: 'animate', label: 'options.animate'},
    {hash: 'size', label: 'options.size'},
    {hash: 'backdrop', label: 'options.backdrop'},
    {hash: 'centered', label: 'options.centered'},
    {hash: 'keyboard', label: 'options.keyboard'},
    {hash: 'focus', label: 'options.focus'},
    {hash: 'dismissOnRouteChange', label: 'options.dismissOnRouteChange'},
    {hash: 'prove-you-can-add', label: 'modalInstance promises and hide()'},
    {hash: 'events', label: 'modalInstance events'},
    {hash: 'handle-update', label: 'modalInstance handleUpdate()'},
  ];
}
