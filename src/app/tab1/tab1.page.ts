import { Component, OnInit } from '@angular/core';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Track } from 'ngx-audio-player';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public http: HttpClient) {
  }


msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Shopping offers',
    link: 'http://35.224.8.90/googlespeech/texttospeech?text=Hi%20Manoj%20hope%20you%20are%20doing%20great%20the%20shopping%20offers%20for%20this%20week%20are%20as%20follows%20First%20Offer%20%2C%20Get%2025%25%20off%20on%20Crocs%20website%20with%20Deutsche%20Bank%20Visa%20Debit%20Card.%20Simply%20use%20the%20promo%20code%20VCROCS%20during%20checkout%20at%20shopcrocs.in%20to%20avail%20the%20discount.%20Second%20offer%20%20Shop%20from%20a%20wide%20range%20of%20products%20on%20Lenskart%20stores%20or%20website%20and%20get%20Rs.%20300%20off%20on%20minimum%20spends%20of%20Rs.%201%2C899%20and%20above%20using%20Deutsche%20Bank%20Visa%20Debit%20Card%20to%20avail%20the%20offer.%20and%20Last%20offer%20on%20shopping%20%20is%20Get%20additional%2010%25%20off%20on%20a%20minimum%20transaction%20of%20Rs.%207000%20at%20any%20PAN%20India%20GAP%20exclusive%20stores%20with%20Deutsche%20Bank%20Visa%20Debit%20Card.%20Use%20promo%20code%20VISAGAP%20at%20checkout%20to%20avail%20the%20offer',
    artist: 'Audio One Artist'
  },
  {
    title: 'Travel and Holiday offers',
    link: 'http://35.224.8.90/googlespeech/texttospeech?text=Now%20Travel%20and%20Holiday%20offfers%20for%20this%20week%20are%20as%20follows%20first%20offer%20is%20Get%20upto%20Rs.%2010%2C000%20off%20on%20Domestic%20and%20International%20Hotel%20bookings%20at%20Goibibo%20website%20or%20app%20using%20your%20Deutsche%20Bank%20Visa%20Debit%20Card.%20Simply%20use%20the%20promo%20code%20GOVISA%20to%20avail%20the%20offer.%20second%20offer%20Get%20exciting%20discounts%20at%20OYO%20using%20your%20Deutsche%20Bank%20Visa%20Debit%20Card.%20Simply%20apply%20the%20relevant%20promo%20codes%20to%20avail%20the%20discount.%20and%20last%20offer%20is%20Get%20up%20to%20Rs.%2010%2C000%20off%20per%20transaction%20on%20Domestic%20and%20International%20hotels%20on%20MakeMyTrip%20website%20and%20mobile%20app%20with%20Deutsche%20Bank%20Visa%20Debit%20Card.%20Apply%20the%20promo%20code%20MMTVISA%20to%20avail%20the%20discount.%20Thanks%20have%20a%20great%20day%20ahead',
    artist: 'Audio two Artist'
  },

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
}
