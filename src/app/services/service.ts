import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
  dataMainPictures: string[];
  selectedNode:number;
  constructor(private http: HttpClient){

  }
  private apiUrl = 'http://dvns.me/yaniv/clientest/public/explorePictures';
  dataGet: any = {};
  headers: Headers;

  getGallaryData():Observable<any[]> {
    let deg_start=170;
    let deg_step=0;
    let leng_start=-70;
    let leng_step=70;

  //noinspection TypeScriptUnresolvedFunction
  return this.http.get('assets/data.json').map(data=>{
  let pictures = data["children"];
  for(let i=0;i<pictures.length;i++){
  pictures[i].id=i;
    pictures[i].style={};
    let currentDeg=deg_start+deg_step;
    deg_step+=10;
    if(currentDeg>=240){
      deg_step=0;
      pictures[i].style.width=leng_start;
      leng_start=leng_start-leng_step;
    }

    if(currentDeg!=240){
      pictures[i].style.width=leng_start;
    }
    pictures[i].style.rotate=currentDeg;

}
    console.log(pictures);
return pictures
})}

  getPictures() : Observable<any[]> {
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get('assets/data.json').map(data=>{
      let pictures = data["children"];
      for(let i=0;i<pictures.length;i++){
        pictures[i].id=i;
      }
      console.log(pictures);
      /*return pictures.map(p=>p.url).filter(p=> p!=undefined);*/
      return pictures.map(
        function(p){
          let obj={id:0,url:''};
          obj.id=p.id;
          obj.url=p.url;
          return obj}).filter(p=> p.url!=undefined);
    });
  }
}
