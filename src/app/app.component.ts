import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
import { Router } from "@angular/router";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient,private router: Router){}

  ngOnInit(){

    this.http.get('assets/user.json').subscribe((data:User) => this.user=data);
  }
  seePictures(){
    this.router.navigateByUrl("gallary");
  }
}
