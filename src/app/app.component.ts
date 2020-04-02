import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Covid-19 global stats";
  _opened: boolean = true;

  _toggleSidebar() {
    this._opened = !this._opened;
  };

}
