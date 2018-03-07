import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { Weather } from '../models/weather.model';

@Injectable()
export class OpenweatherService {

  public newCity = new Subject<Weather>();
  public cities: Weather[]= [];
  public weatherCity: Weather;
  public num: number = 0;
  private apiId = '3726fe9cef4ab9d506ee77d8d8f7f3d1';
  private units = 'metric';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const url = 'http://api.openweathermap.org/data/2.5/weather';
    const q = city;
    const params = new HttpParams()
      .append('appid', this.apiId)
      .append('units', this.units)
      .append('q', city);

     this.http.get(url, {params: params})
       .subscribe( data => {
          this.weatherCity = {
              id: this.num++,
              name: data.name,
              temp: data.main.temp.toFixed(0),
              date: new Date(),
              humidity: data.main.humidity,
              country: data.sys.country,
              wind: data.wind.speed,
              description: data.weather[0].description
            };
          this.cities.push(this.weatherCity);
       });
  	
    return this.http.get(url, {params: params})
  }



  onChangeInput(weather: Weather) {
  	this.newCity.next(weather);
  }


}
