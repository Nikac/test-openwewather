import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { OpenweatherService } from '../../services/openweather.service';
import { WeatherDetail } from '../../models/weather-detail.model';

@Component({
  selector: 'five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.scss']
})
export class FiveDayWeatherComponent implements OnInit {
  weatherDetailCity: WeatherDetail;
  cities: string[] = [];

  constructor(private router: Router, private owService: OpenweatherService) { }

  ngOnInit() {
  	this.owService.newFiveDayWeather
      .subscribe( data => {
        this.weatherDetailCity = data;
      });
  }

  onBack() {
  	this.router.navigate(['/']);
  }
}
