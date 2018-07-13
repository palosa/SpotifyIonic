import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider  } from '../../providers/user-service/user-service';
import { DetailSongPage } from './../detail-song/detail-song';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public items:any[];

  constructor(public navCtrl: NavController, public provider: UserServiceProvider) {}


 search(event:any){
   let value =event.target.value;
   console.log(value);
   this.provider.searchtTrack(value).subscribe(
     data=>{
       
       this.items = data.tracks.items;

       console.log(this.items);
       
     },
     error=>{
       console.log(error)
     }
   )
 }
 searchAlbums(id:string, name:string, album:string, release_date:string, nameartists:string){
  this.navCtrl.push(DetailSongPage,{
    id:id,
    name:name,
    album:album,
    release_date:release_date,
    nameartists:nameartists
  });
 }
}
