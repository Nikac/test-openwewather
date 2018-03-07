import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCityComponent } from './weather/weather-city/weather-city.component';
import { FiveDayWeatherComponent } from './weather/five-day-weather/five-day-weather.component';
import { OpenweatherService } from './services/openweather.service';
import { WeatherResultComponent } from './weather/five-day-weather/weather-result/weather-result.component';


const appRoutes: Routes = [
  { path: '' , component: WeatherComponent },
  { path: 'five-day', component: FiveDayWeatherComponent },
  { path: '' , redirectTo: '', pathMatch: 'full'},
  { path: '**', component: WeatherComponent }
];

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
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSDGXGq23T0OiLXLDrKKGYrwUZP3pyl6s'
    })
  ],
  providers: [
    OpenweatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
