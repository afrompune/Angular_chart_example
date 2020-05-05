import { Injectable } from '@angular/core';

import { Chart } from 'node_modules/chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartUtilsService {
  dataIndex: Map<string, number> = new Map<string, number>();
  itemsInChart = 25;

  constructor() { }

  public createChart(chartName: string,
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
        },
        animation: {
          duration: 2
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
    let sampleData = [];

    for (let i = 1; i <= this.itemsInChart; i++)
      sampleData.push(Math.floor(Math.random() * this.itemsInChart) + 1);

    return this.getSampleData("data", sampleData,
      origData,
      totalRequireItems);
  }
  public getSampleData(type: string, sampleData: any[], origData: any[], totalRequireItems: number) {
    let newData: any[] = [];

    if (origData) {
      newData = origData;
    }

    if (this.dataIndex[type] == null) {
      this.dataIndex[type] = 0;
    }

    let i = 0;
    while (i < totalRequireItems) {
      newData.push(sampleData[this.dataIndex[type]]);
      i++;
      this.dataIndex[type] = (this.dataIndex[type] + 1) % sampleData.length;

    }

    if (newData.length > this.itemsInChart)
      return newData.slice(newData.length - this.itemsInChart - 1);
    else
      return newData;
  }

  public getchartLabel() {
    return "Temperatures";
  }

  public getChartLabels(origData: string[], totalRequireItems: number) {

    let sampleData: string[] = [];

    if (!origData)
      origData = sampleData;

    let val1 = 0;
    if (this.dataIndex['chartlabel']) {
      console.log("Next Label Index : " + this.dataIndex['chartlabel']);
      val1 = this.dataIndex['chartlabel'];
    }
    else {
      this.dataIndex['chartlabel'] = 0;
    }

    let i = 0;
    while (i < totalRequireItems) {
      val1++;
      origData.push("" + val1);
      i++;
    }

    this.dataIndex['chartlabel'] = this.dataIndex['chartlabel'] + totalRequireItems;

    if (origData.length > this.itemsInChart)
      return origData.slice(origData.length - this.itemsInChart);
    else
      return origData;
  }

  public getChartType() {
    return 'bar';
  }
}
