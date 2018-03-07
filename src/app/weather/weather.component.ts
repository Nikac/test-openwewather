import {Component, OnInit} from '@angular/core';


import { OpenweatherService } from '../services/openweather.service';
import { Weather } from '../models/weather.model';


@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentCityWeather: Weather;
  citiesWeather: Weather[] = [];


  constructor(private owService: OpenweatherService) { }

  ngOnInit() {
    this.citiesWeather = this.owService.cities;
  }

 
  

}

