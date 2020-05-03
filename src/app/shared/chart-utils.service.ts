import { Injectable } from '@angular/core';

import { Chart } from 'node_modules/chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartUtilsService {
  dataIndex: Map<string, number> = new Map<string, number>();
  constructor() { }

  public updateChart(chartName: string,
    type: string,
    label: string,
    labels: string[],
    data: number[],
    backgroundColor: string[],
    borderColor: string[]
  ) {

    var myChart = new Chart(chartName, {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    return myChart;

  }

  public getBackgroundColor(origData: string[], totalRequireItems: number) {
    return this.getSampleData("backgroundColor", [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
      origData,
      totalRequireItems);

  }

  public getBordercolor(origData: string[], totalRequireItems: number) {
    return this.getSampleData("borderColor", [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
      origData,
      totalRequireItems);

  }

  public getChartData(origData: number[], totalRequireItems: number) {
    return this.getSampleData("data", [
      1, 2, 3, 4, 5, 6],
      origData,
      totalRequireItems);
  }
  public getSampleData(type: string, sampleData: any[], origData: any[], totalRequireItems: number) {
    //const sampleData = [1, 2, 3, 4, 5, 6];
    let newData: any[] = [];

    if (origData) {
      newData = origData;
    }

    if (this.dataIndex[type] == null) {
      this.dataIndex[type] = 0;
    }

    let i = 0;
    while (i < totalRequireItems) {
      console.log("Item # " + i + "Index : " + this.dataIndex);

      newData.push(sampleData[this.dataIndex[type]]);
      i++;
      this.dataIndex[type] = (this.dataIndex[type] + 1) % sampleData.length;

    }

    console.log("getChartData : " + newData);
    console.log("Keeping onwards from " + (newData.length - sampleData.length - 1));
    if (newData.length > sampleData.length)
      return newData.slice(newData.length - sampleData.length - 1);
    else
      return newData;
  }

  public getchartLabel() {
    return "Temperatures";
  }

  public getChartLabels() {
    return ['2007', '2007', '2008', '2009', '2010', '2011'];
  }

  public getChartType() {
    return 'bar';
  }
}
