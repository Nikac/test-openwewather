export class Weather {
	constructor(
	  public id: number,
	  public name: string,
	  public temp: number,
	  public humidity: string,
	  public date: Date,
	  public country: string,
	  public wind: number,
	  public description: string
  ) {}
 }
