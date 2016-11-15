import '../class/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }   from '../component/app.component';
import { DashboardComponent } from '../component/dashboard.component';
import { HeroDetailComponent } from '../component/hero-detail.component';
import { HeroesComponent } from '../component/heroes.component';
import { HeroService } from '../service/hero.service';
import { HeroSearchComponent }  from '../component/hero-search.component';

import { AppRoutingModule }     from '../module/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../service/in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
