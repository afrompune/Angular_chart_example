import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { SelectChartComponent } from './charts/select-chart/select-chart.component';

import { ChartsModule } from 'ng2-charts';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    SelectChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
