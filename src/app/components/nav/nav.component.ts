import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isVisible = false;
  selectedUser = 'User';
  greeting = 'Hello'

  toggleVisible(event: any) {
    this.isVisible = !this.isVisible;
    this.selectedUser = String(event.target.innerText);
  }
}
