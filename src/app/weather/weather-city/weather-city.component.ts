import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../models/weather.model';

@Component({
  selector: 'weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.scss']
})
export class WeatherCityComponent implements OnInit {
  @Input() 'currentCityWeather': Weather;

  constructor() { }

  ngOnInit() {
  }

}
