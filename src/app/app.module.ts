import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule }   from '@angular/common/http';
import { GallaryComponent } from './gallary/gallary.component';
import { MainComponent } from './main/main.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(<Routes>[
    {path: 'gallary/:id', component: GallaryComponent},
    {path: 'home', component: MainComponent,  useAsDefault:true},
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  ])

   ],
  declarations: [ AppComponent, GallaryComponent, MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
