import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LogComponent } from './log/log.component';
import { ReportComponent } from './report/report.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path: 'data', component:DataComponent},
  {path: 'log', component: LogComponent},
  {path: 'report', component: ReportComponent},
  {path: 'ui', component: UiComponent},

  {path: '', redirectTo:'log', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
