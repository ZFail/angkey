import { Component } from '@angular/core';
import {LatLonModel} from './store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'angkey';
  latlon = new LatLonModel({lat: 0, lon: 2})
  constructor() {
    console.log(this.latlon.lat, this.latlon.lon)
  }
}
