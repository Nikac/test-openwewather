import { Component, OnInit, Input } from '@angular/core';

import { WeatherDetail } from '../../../models/weather-detail.model';
import { OpenweatherService } from '../../../services/openweather.service';

@Component({
  selector: 'weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit {
  @Input() weatherDetailCity: WeatherDetail;
  lat: number;
  lon: number;

  constructor(private owService: OpenweatherService) { }

  ngOnInit() {
  	this.owService.newLat
  		.subscribe( data => this.lat = data);

  	this.owService.newLon
  		.subscribe( data => this.lon = data);
  }

}
