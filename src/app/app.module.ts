import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityComponent } from './weather/weather-city/weather-city.component';
import { OpenweatherService } from './services/openweather.service';
import { FiveDayWeatherComponent } from './weather/five-day-weather/five-day-weather.component';
import { WeatherResultComponent } from './weather/five-day-weather/weather-result/weather-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    WeatherCityComponent,
    FiveDayWeatherComponent,
    WeatherResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    OpenweatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
