import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialGestureDirective } from '../social-gestures.directive';

import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, SocialGestureDirective],
  exports: [ExploreContainerComponent, SocialGestureDirective]
})
export class ExploreContainerComponentModule {}
