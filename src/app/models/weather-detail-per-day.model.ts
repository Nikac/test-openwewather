export class WeatherDetailPerDay {
	constructor(
	  public date: string,
      public temp: number,
      public minTemp: number,
      public maxTemp: number,
      public description: string
  ) {}
}