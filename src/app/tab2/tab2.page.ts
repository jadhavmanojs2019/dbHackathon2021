import { Component } from '@angular/core';
import {Gesture} from '../social-gestures.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  gestureOpts: Gesture[] = [
    {name: 'tap'},
    {name: 'doubleTap'},
    {name: 'press'},
    {name: 'swipe'}
  ];
  constructor(private router: Router) {}

  onTap(event: any){
    console.log(event);
    // console.log('tap');
  }
  onDoubleTap(event: any){
    console.log(event);
    // console.log('DoubleTap');
  }

  onPress(event: any){
    console.log(event);
    // console.log('press');
  }
  onSwipe(event: any){
    console.log(event);
    // console.log('Swipe');
    if(event.dirX=='left' && event.swipeType=='moveend'){
      console.log('left');
      this.router.navigateByUrl('tabs/tab1');
    }
    else if(event.dirX=='right' && event.swipeType=='moveend'){
      console.log('right')
      this.router.navigateByUrl('tabs/tab3');
    }
  }

}
