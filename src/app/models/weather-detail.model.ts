import { WeatherDetailPerDay } from './weather-detail-per-day.model';

export class WeatherDetail {
	constructor(
	  public country: string,
      public city: string,
      public firstDay: WeatherDetailPerDay,
      public secondDay: WeatherDetailPerDay,
      public thirdDay: WeatherDetailPerDay,
      public fourthDay: WeatherDetailPerDay,
      public fifthDay: WeatherDetailPerDay
  ) {}
}
