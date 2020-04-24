import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollablePageComponent } from './components/scrollable-page/scrollable-page.component';

const routes: Routes = [
  {path: '', component: ScrollablePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
