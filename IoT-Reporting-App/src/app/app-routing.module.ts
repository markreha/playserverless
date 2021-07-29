import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DisplayReportComponent } from './display-report/display-report.component';
import { DisplayChartComponent } from './display-chart/display-chart.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'display-report', component: DisplayReportComponent },
  { path: 'display-chart', component: DisplayChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
