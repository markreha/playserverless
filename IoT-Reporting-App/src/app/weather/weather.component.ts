import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";
import { AxiosInstance } from "axios";
import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit 
{
  reportForm: FormGroup;
  wasSubmitted:boolean = false;
  axiosInstance:AxiosInstance = axios.create();

  constructor(private router: Router) { }

  ngOnInit() 
  {
    // Setup default dates
    let fromDate = new Date();
    fromDate.setHours(-fromDate.getTimezoneOffset()/60);
    fromDate.setMinutes(0);
    fromDate.setSeconds(0);
    fromDate.setMilliseconds(0);
    let toDate = new Date(fromDate.getTime()+1000*60*60*24);
  
    this.reportForm = new FormGroup(
    {
      // Set the default values for the Report Search Form
      'reportType': new FormControl("0"),
      'fromDate': new FormControl(fromDate.toISOString().slice(0, -1)),
      'toDate': new FormControl(toDate.toISOString().slice(0, -1)),
      'deviceId': new FormControl("0")
    });
    this.wasSubmitted = false;
  }

  public async onSubmit()
  {
    // Process the Report Search Form
    let reportType = this.reportForm.get('reportType').value;
    let fromDate = new Date(this.reportForm.get('fromDate').value).toISOString().replace('T', ' ');
    let toDate = new Date(this.reportForm.get('toDate').value).toISOString().replace('T', ' ');
    let deviceId = this.reportForm.get('deviceId').value;

    // Make REST API call to get the Weather Data
    const params = new URLSearchParams([['device', deviceId], ['from', fromDate], ['to', toDate]]);
    let url = "[REPLACE ME]";
    const res = await this.axiosInstance.get(url, { params, auth: {username: '[REPLACE ME]', password: '[REPLACE ME]' }});
    if(res.status !== 200)
    {
      // If not 200 response then Display error
      alert('This REST API request failed.');
    }
    else
    {
      // Navigate to the Display Report or Displau Chart Component with the returned Weather Data
      if(reportType =="0")
        this.router.navigate(['display-report'], { state: { data: res.data } });
      else
        this.router.navigate(['display-chart'], { state: { data: res.data } });
    }

    // Ensure the Weather Component does not get redisplayed
    this.wasSubmitted = true;
  }
}

