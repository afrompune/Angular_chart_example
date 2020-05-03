import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { SelectChartComponent } from './charts/select-chart/select-chart.component';

const routes: Routes = [
  {
    path: 'charts', component: ChartsComponent,
    children: [
      { path: '', component: SelectChartComponent },
      { path: 'barchart', component: BarChartComponent },
      { path: 'piechart', component: PieChartComponent },
      { path: 'linechart', component: LineChartComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
