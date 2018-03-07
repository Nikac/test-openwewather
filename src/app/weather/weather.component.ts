import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { OpenweatherService } from '../services/openweather.service';
import { Weather } from '../models/weather.model';
import { WeatherDetail } from '../models/weather-detail.model';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentCityWeather: Weather;
  citiesWeather: Weather[] = [];
  cityName: string;
  weatherDetail: WeatherDetail;

  constructor(private owService: OpenweatherService, private router: Router) { }

  ngOnInit() {
    this.citiesWeather = this.owService.cities;
  }

  onClick(city: Weather) {
   this.cityName = city.name;
   this.router.navigate(['/five-day']).then(() => {

     this.owService.fiveDayWeather(this.cityName)
       .subscribe((data: any) => {
         console.log(data);
         this.lat = data.city.coord.lat;
         this.lon = data.city.coord.lon;

         this.weatherDetail = {
           city: data.city.name,
           country: data.city.country,
           firstDay: {
             date: data.list[0].dt_txt,
             temp: data.list[0].main.temp.toFixed(0),
             minTemp: data.list[0].main.temp_min.toFixed(0),
             maxTemp: data.list[0].main.temp_max.toFixed(0),
             description: data.list[0].weather[0].description
           },
           secondDay: {
             date: data.list[8].dt_txt,
             temp: data.list[8].main.temp.toFixed(0),
             minTemp: data.list[8].main.temp_min.toFixed(0),
             maxTemp: data.list[8].main.temp_max.toFixed(0),
             description: data.list[8].weather[0].description
           },
           thirdDay: {
             date: data.list[16].dt_txt,
             temp: data.list[16].main.temp.toFixed(0),
             minTemp: data.list[16].main.temp_min.toFixed(0),
             maxTemp: data.list[16].main.temp_max.toFixed(0),
             description: data.list[16].weather[0].description
           },
           fourthDay: {
             date: data.list[24].dt_txt,
             temp: data.list[24].main.temp.toFixed(0),
             minTemp: data.list[24].main.temp_min.toFixed(0),
             maxTemp: data.list[24].main.temp_max.toFixed(0),
             description: data.list[24].weather[0].description
           },
           fifthDay: {
             date: data.list[32].dt_txt,
             temp: data.list[32].main.temp.toFixed(0),
             minTemp: data.list[32].main.temp_min.toFixed(0),
             maxTemp: data.list[32].main.temp_max.toFixed(0),
             description: data.list[32].weather[0].description
           }
         };
         this.owService.onChangeInputWeatherDetail(this.weatherDetail);

       });
    });
  }

}

