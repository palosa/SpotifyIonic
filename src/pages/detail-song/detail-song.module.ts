import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailSongPage } from './detail-song';

@NgModule({
  declarations: [
    DetailSongPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailSongPage),
  ],
})
export class DetailSongPageModule {}
