import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LevelComponent } from './Components/level/level.component';
import { LevelListComponent } from './Components/level-list/level-list.component';

const routes: Routes = [
  { path:'levels', component: LevelListComponent},
  { path:'', component: HomeComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
