import { Component, OnInit } from '@angular/core';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Track } from 'ngx-audio-player';
import {HttpClient} from '@angular/common/http';
import {Gesture} from '../social-gestures.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public http: HttpClient, private router: Router) {}


msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
gestureOpts: Gesture[] = [
  {name: 'tap'},
  {name: 'doubleTap'},
  {name: 'press'},
  {name: 'swipe'}
];

// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Account Details',
    link: 'http://35.224.8.90/googlespeech/texttospeech?text=To%20hear%20about%20your%20account%20details%20single%20tap%20on%20your%20screen%20and%20double%20tap%20to%20check%20the%20latest%20offers',
    artist: 'Audio One Artist'
  }




];

  ngOnInit(){
    // this.nativeAudio.preloadSimple('uniqueId1', 'assets/test.mp3');

    // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
    const req = 'Hello Manoj';
    // this.http.post('http://35.224.8.90/googlespeech/texttospeech',req,{responseType:'blob' as 'json'}).subscribe(res => {
    //   console.log(res);
    //   // this.msaapPlaylist[0].link = res;
    // })
  }
  onEnded(event: any){
    console.log(event);

  }


  onTap(event: any){
    console.log(event);
   this.msaapPlaylist = [{
      title: 'Account Details',
      link: 'http://35.224.8.90/googlespeech/texttospeech?text=You%20have%202%20accounts%20with%20us%2C%20first%20account%2000011405%20%20has%20balance%20rupees%20twenty%20two%20thousand%20%20and%20%20second%20account%2000011405468%20has%20balance%20of%20rupees%20fifty%20thousand%20',
      artist: 'Audio One Artist'
    }]
  }
  onDoubleTap(event: any){
    console.log(event);
    if(event == 'double tab'){
      this.router.navigateByUrl('tabs/tab2');
    }
  }

  onPress(event: any){
    console.log(event);

  }
  onSwipe(event: any){
    console.log(event);
    // console.log('Swipe');
    if(event.dirX=='left' && event.swipeType=='moveend'){
      console.log('left');

    }
    else if(event.dirX=='right' && event.swipeType=='moveend'){
      console.log('right')

    }
  }
}
