import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  private baseUrl:string="https://api.spotify.com/v1";
  private searchUrl:string=this.baseUrl+'/search?q=';
  private albumsUrl:string=this.baseUrl+'/track';
  private auth_token:string= "Bearer BQAm44WoVwYkH1Y41fyBPw1dwoTv6Gr2nu83AZqZkhN0_r8cXSqKqjP_jyq83HVWofjvtHECungm0nuaGT_Kilodh1AsgezcZjeam3oEc2tXRlZ9cIm-sDbHp6_u-AiZ8cDEMmAfHX42rLw";
  private requestHeader= new HttpHeaders().set('Content-Type','application/json')
  .append('Authorization',this.auth_token);
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    
  }
  searchtTrack(name:string){
    
    return this.http.get(this.searchUrl+name+'&type=track',{headers:this.requestHeader});
  }
  searchAlbums(id:string){
    return this.http.get(this.albumsUrl+id,{headers:this.requestHeader});
  }

}
