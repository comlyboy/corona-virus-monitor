import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Covid-19 global stats";

  // isMobile: boolean = false;
  // width: number = window.innerWidth;
  // height: number = window.innerHeight;
  // mobileWidth: number = 760;

  // ngOnInit(): void {
  //   this.isMobile = this.width < this.mobileWidth;
  //   console.log(`width ${this.width}`)
  //   console.log(`height ${this.height}`)
  //   console.log(`ifMobile ${this.isMobile}`)
  // }


  // onWindowResize(event) {
  //   this.width = event.target.innerWidth;
  //   this.height = event.target.innerHeight;
  //   this.isMobile = this.width < this.mobileWidth;
  //   console.log(`width2 ${this.width}`)
  //   console.log(`height2 ${this.height}`)
  //   console.log(`ifMobile2 ${this.isMobile}`)
  // }
}
