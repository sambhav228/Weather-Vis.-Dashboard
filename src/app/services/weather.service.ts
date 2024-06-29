import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/current.json', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', '40652ab04dmsh415785a9744e1ebp17f393jsn1647d51da4a7')
        .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),
      params: new HttpParams()
        .set('q', cityName)
    })
  }




// private socket$  = webSocket('https://weatherapi-com.p.rapidapi.com/current.json');
//   public messages$ = this.socket$.asObservable();

//   public getWeatherData(cityName: any) {
//     this.socket$.next(msg);
//   }

//   getWeatherData(cityName: string): Observable<WeatherData> {
//     return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/current.json', {
//       headers: new HttpHeaders()
//         .set('X-RapidAPI-Key', '40652ab04dmsh415785a9744e1ebp17f393jsn1647d51da4a7')
//         .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),
//       params: new HttpParams()
//         .set('q', cityName)
//     })
//   }

}
