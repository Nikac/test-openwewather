import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

  onEnter(city: string) {
    this.cities = city.split(', ');
    // console.log(this.cities);
    this.emptyInput = '';
  }
}

