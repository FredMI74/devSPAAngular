import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectPaperComponent } from './select-paper/select-paper.component';
import { ShowHistoryComponent } from './show-history/show-history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'select', 
    component: SelectPaperComponent 
  },
  { 
    path: 'history', 
    component: ShowHistoryComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
