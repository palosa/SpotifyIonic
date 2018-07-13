import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the DetailSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-song',
  templateUrl: 'detail-song.html',
})
export class DetailSongPage {
  public get navParams(): NavParams {
    return this._navParams;
  }
  public set navParams(value: NavParams) {
    this._navParams = value;
  }

  public id:string;
  public name:string;
  public artists:string;
  public album:string;
  public date:string;
  public tracks:any[];
  

  constructor(public navCtrl: NavController, public _navParams: NavParams, public _provider:UserServiceProvider) {
    this.id= this._navParams.get("id");
    this.name= this._navParams.get("name");
    this.album= this._navParams.get("album");
    this.date= this._navParams.get("release_date");
    this.artists= this._navParams.get("nameartists");
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetailSongPage');
  }
}
