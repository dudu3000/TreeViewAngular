import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree/tree.component';
import { NewTreeComponent } from './newTree/newTree.component';

const routes: Routes = [
  { path: '' , component: TreeComponent },
  { path: 'newtree' , component: NewTreeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
