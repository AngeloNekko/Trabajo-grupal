import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrasesComponent} from './frases/frases.component';
const routes: Routes = [
  { path: '', redirectTo: '/Frases', pathMatch: 'full' },
  { path: 'Frases', component: FrasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
