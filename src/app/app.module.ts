import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityComponent } from './weather/weather-city/weather-city.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    WeatherCityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
