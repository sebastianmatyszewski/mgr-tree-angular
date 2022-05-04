import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBigTreeComponent } from './component/display-big-tree/display-big-tree.component';
import { DisplayMediumTreeComponent } from './component/display-medium-tree/display-medium-tree.component';
import { DisplaySmallTreeComponent } from './component/display-small-tree/display-small-tree.component';
import { GenerateTreeComponent } from './component/generate-tree/generate-tree.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent},
  { path: 'generate-tree', component: GenerateTreeComponent },
  { path: 'small-trees', component: DisplaySmallTreeComponent },
  { path: 'medium-trees', component: DisplayMediumTreeComponent },
  { path: 'big-trees', component: DisplayBigTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
