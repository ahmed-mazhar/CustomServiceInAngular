import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/PageNotFound/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './Components/content/content.component';
import { AboutComponent } from './Components/about/about.component';
import { ChooseMeComponent } from './Components/choose-me/choose-me.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { TeamComponent } from './Components/team/team.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { ClientsComponent } from './Components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    FooterComponent,

    PageNotFoundComponent,
    
    ContentComponent,
    
    AboutComponent,
    
    ChooseMeComponent,
    
    PortfolioComponent,
    
    TeamComponent,
    
    TestimonialsComponent,
    
    ClientsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


