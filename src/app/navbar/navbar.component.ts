import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { OpenweatherService } from '../services/openweather.service';
import { Weather } from '../models/weather.model';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public emptyInput: string = '';
  weatherCity: Weather;
  cities: string[] = [];

  constructor(private owService: OpenweatherService) { }

  ngOnInit() {}

  onEnter(city: string) {
    this.cities = city.split(', ');
    // console.log(this.cities);

    this.cities.map( cityName => {
         this.owService.getWeather(cityName)
          .subscribe((data: Weather) => {
              this.weatherCity = data;
          });

    })  
    this.emptyInput = '';
  }
}

