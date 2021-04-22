import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { P404Component } from "./p404/p404.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
