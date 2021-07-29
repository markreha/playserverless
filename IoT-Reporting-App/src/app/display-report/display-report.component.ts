import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css']
})

export class DisplayReportComponent implements OnInit 
{
  reportData: any = null;
  reportColumns: string[] = ['temperature', 'pressure', 'humidity', 'date'];

  constructor(public router: Router) 
  { 
    // Get the Navigation Extras data (i.e. the Report Data)
    let reportData =  this.router.getCurrentNavigation().extras.state.data; 
    this.reportData = reportData.data;

    // Format the Date for display
    for (let i = 0;i < this.reportData.length;++i) 
    {
      let date = this.reportData[i].date;
      let newDate = new Date(date.replace(' ', 'T')).toDateString() + " " + new Date(date.replace(' ', 'T')).toLocaleTimeString()
      this.reportData[i].date = newDate;
    }
  }

  ngOnInit() 
  {
  }
  
  ngOnDestroy()
  {
  }
}
