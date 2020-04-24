import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollablePageComponent } from './components/scrollable-page/scrollable-page.component';
import { SvgPageComponent } from './components/svg-page/svg-page.component';

const routes: Routes = [
  {path: '', component: ScrollablePageComponent},
  {path: 'page', component: ScrollablePageComponent},
  {path: 'svg', component: SvgPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
