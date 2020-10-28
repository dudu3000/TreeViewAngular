import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { ContactComponent } from './contact/contact.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: '' , component: AppHomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'tree' , component: TreeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
