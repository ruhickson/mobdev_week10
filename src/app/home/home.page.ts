import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherValues :any
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
      this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Dublin"}&appid=4fd2407d51bd610343dcad0568c672c3`).subscribe(results =>{
        console.log(results);
        this.weatherValues = results.main
    })
  }
}
