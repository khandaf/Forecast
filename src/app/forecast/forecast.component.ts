import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
 public forecast:Object;
  glasgowURL:string ="http://api.openweathermap.org//data/2.5/forecast?q=Glasgow&units=imperial&APPID=d02b54f95f6ba5245622bd6ff22c565c";
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.getForecast(this.glasgowURL);
  }
  getForecast(url:string) {
    this.forecastService.getForecast(url).subscribe(data => {
            this.forecast = data;
            
        });
    
  }

}
