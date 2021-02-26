import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showRoute = false;
  showSplash = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
    }, 1000);
  }

  onPress(event: any){
    this.showRoute = true;
    console.log(event);
    // console.log('press');
  }

  
}
