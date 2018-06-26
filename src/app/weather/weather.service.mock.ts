import { Observable, of } from 'rxjs';

import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../interfaces';

export class WeatherServiceMock implements IWeatherService {
  private mockWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 28.3,
    description: 'light intensity drizzle'
  };

  public getCurrentWeather(city: string, country: string) {
    return of(this.mockWeather);
  }
}
