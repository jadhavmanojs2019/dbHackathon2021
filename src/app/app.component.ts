import { Component } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,CameraPhoto, CameraSource } from '@capacitor/core';
import { Router } from '@angular/router';
import { Track } from 'ngx-audio-player';

const { Camera, Filesystem, Storage } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showRoute = false;
  constructor(private router: Router) {}


  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
msaapPlaylist2: Track[] = [
  {
    title: 'Login Instrunctions',
    link: 'http://35.224.8.90/googlespeech/texttospeech?text=Please%20press%20anywhere%20on%20the%20screen%20to%20login%20Face%20Id.%20App%20will%20scan%20your%20face%20to%20verify%20your%20authentication',
    artist: 'Audio One Artist'
  }


];

  public async addPhotoToGallery() {
    // Take a photo
    this.showRoute = false;
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

  }

  // alertFunc(){
  //   window.location.href = 'https://www.deutschebank.co.in/';
  // }

  stopStreaming() {
    console.log("Here video");
    setTimeout(this.onPress, 3000);
    console.log("Here end video");
  }

  onPress(event: any){
    this.showRoute = true;
     console.log('called');
    // console.log('press');
  }
  onEnded(event: any){
    console.log(event);

  }


}
