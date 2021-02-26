import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showRoute = false;
  constructor() {}

  onPress(event: any){
    this.showRoute = true;
    console.log(event);
    // console.log('press');
  }
}
