import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css']
})

export class DisplayChartComponent implements OnInit 
{
  reportData: any = null;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions = { responsive: true, scales: {xAxes: [{type: 'time', time: {unit: 'day'}}]}, title: {display: true, text: 'Weather IoT Data', fontSize: 18}, legend: { position: 'bottom'}};
  lineChartColors: Color[] = [ {borderColor: '#3669C9', borderWidth: 2, pointRadius: 0}, {borderColor: '#DA3B21', borderWidth: 2, pointRadius: 0}, {borderColor: '#FD9827', borderWidth: 2, pointRadius: 0} ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  constructor(public router: Router) 
  { 
    // Get the Navigation Extras data (i.e. the Report Data)
    let reportData =  this.router.getCurrentNavigation().extras.state.data;
    this.reportData = reportData.data;

    // Assemble separate Data Sets
    let temperature: number[] = [];
    let humidity: number[] = [];
    let pressure: number[] = [];
    let dates: string[] = [];
    for (let i = 0;i < this.reportData.length;++i)
    {
      temperature.push(this.reportData[i].temperature);
      humidity.push(this.reportData[i].humidity);
      pressure.push(this.reportData[i].pressure);
      dates.push(this.reportData[i].date);
    }

    // Initialize Chart Data
    this.lineChartData = 
    [
        { data: temperature, label: 'Temperature', fill: false },
        { data: humidity, label: 'Humidity', fill: false },
        { data: pressure, label: 'Pressure', fill: false }
    ];
    this.lineChartLabels = dates;
  }

  ngOnInit() 
  {
  }

  ngOnDestroy()
  {
  }
}
