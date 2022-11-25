import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QueryComponent } from './components/query/query.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "products",
    component: QueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
