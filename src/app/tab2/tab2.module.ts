import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SocialGestureDirective } from '../social-gestures.directive';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NgxAudioPlayerModule } from 'ngx-audio-player'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NgxAudioPlayerModule
  ],
  declarations: [Tab2Page,SocialGestureDirective]
})
export class Tab2PageModule {}
