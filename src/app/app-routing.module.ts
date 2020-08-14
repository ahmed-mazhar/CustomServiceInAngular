import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Components/PageNotFound/page-not-found/page-not-found.component';
import { ContentComponent } from './Components/content/content.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { TeamComponent } from './Components/team/team.component';


const routes: Routes = [
   /* {path:'Home',component:HomeComponent},
  {path:'Product',component:OrderMasterComponent},*/
  {path:'portofolio',component:PortfolioComponent},
  {path:'team',component:TeamComponent},
  {path:'content',component:ContentComponent},
  {path:'about',component:AboutComponent},
  //{path:'add-new',component:AddNewComponent},
  {path:'',redirectTo:'/content',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
