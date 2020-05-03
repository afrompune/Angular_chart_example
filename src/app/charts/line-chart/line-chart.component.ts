import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartUtilsService } from 'src/app/shared/chart-utils.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnDestroy {
  intervalId: any;
  myChartHandle: any;

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabel = this.chartUtils.getchartLabel();
  public chartLabels = this.chartUtils.getChartLabels();
  public chartType = 'line';//this.chartUtils.getChartType();
  public chartLegend = true;
  public backGroundColor = this.chartUtils.getBackgroundColor(undefined, 6);
  public borderColor = this.chartUtils.getBordercolor(undefined, 6);
  public chartData = this.chartUtils.getChartData(undefined, 6);

  constructor(private chartUtils: ChartUtilsService) { }

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.myChartHandle = this.chartUtils.updateChart("myChart",
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
      this.backGroundColor = this.chartUtils.getBackgroundColor(this.backGroundColor, 1);
      this.borderColor = this.chartUtils.getBordercolor(this.borderColor, 1);
      this.chartData = this.chartUtils.getChartData(this.chartData, 1);
      //this.updateChart();
      this.myChartHandle.data.datasets[0].data = this.chartData;
      this.myChartHandle.update();

    }, 300);
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
