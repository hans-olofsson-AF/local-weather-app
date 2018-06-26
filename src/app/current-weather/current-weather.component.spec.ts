import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherService } from '../weather/weather.service';
import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherServiceMock } from '../weather/weather.service.mock';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [{provide: WeatherService, useClass: WeatherServiceMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
