import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartUtilsService } from 'src/app/shared/chart-utils.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy {
  intervalId: any;
  myChartHandle: any;
  duration:number = 2;

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabel = this.chartUtils.getchartLabel();
  public chartLabels = this.chartUtils.getChartLabels(undefined, 25);
  public chartType = 'bar';
  public chartLegend = true;
  public backGroundColor = this.chartUtils.getBackgroundColor(undefined, 25);
  public borderColor = this.chartUtils.getBordercolor(undefined, 25);
  public chartData = this.chartUtils.getChartData(undefined, 25);

  constructor(private chartUtils: ChartUtilsService) { }

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.myChartHandle = this.chartUtils.createChart("myChart",
      this.chartType,
      this.chartLabel,
      this.chartLabels,
      this.chartData,
      this.backGroundColor,
      this.borderColor
    );
  }

  startUpdateChart() {
    this.intervalId = setInterval(() => {
      this.chartLabels = this.chartUtils.getChartLabels(this.chartLabels, 1);
      this.backGroundColor = this.chartUtils.getBackgroundColor(this.backGroundColor, 1);
      this.borderColor = this.chartUtils.getBordercolor(this.borderColor, 1);
      this.chartData = this.chartUtils.getChartData(this.chartData, 1);
      this.myChartHandle.data.datasets[0].data = this.chartData;
      this.myChartHandle.data.datasets[0].backgroundColor = this.backGroundColor;
      this.myChartHandle.data.datasets[0].borderColor = this.borderColor;
      this.myChartHandle.data.labels = this.chartLabels;
      console.log(this.chartData);
      this.myChartHandle.update();
    }, this.duration * 1000);
  }

  stopUpdateChart() {
    if (this.intervalId)
      clearInterval(this.intervalId);
    this.intervalId = null;
  }

  ngOnDestroy() {
    this.stopUpdateChart();
  }
}
