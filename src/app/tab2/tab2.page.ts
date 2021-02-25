import { Component } from '@angular/core';
import {Gesture} from '../social-gestures.directive';
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
  constructor() {}

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
  }

}
