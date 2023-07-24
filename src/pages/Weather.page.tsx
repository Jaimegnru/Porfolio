import {  useState } from "react";
import { useFetch } from "../hooks/useFetch.hooks";
import { Label } from "../components/atoms/label/Label.Components";
import { Button } from "../components/atoms/button/button.components";
import { Header } from "../components/atoms/Header/Header.component";
import { Footer } from "../components/atoms/Footers/Footers.component";

export interface Tiempo {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
  CDNWeatherapiCOMWeather64X64Day119PNG = "//cdn.weatherapi.com/weather/64x64/day/119.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
  CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
  Clear = "Clear",
  Cloudy = "Cloudy",
  PartlyCloudy = "Partly cloudy",
  Sunny = "Sunny",
}

export enum WindDir {
  Nnw = "NNW",
  Nw = "NW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}


export const Weather = () => {
  const [dato, setDato] = useState<string>("Cáceres")
  const { tiempo, fetchTiempo } = useFetch<Tiempo>({ url: `http://api.weatherapi.com/v1/forecast.json?key=a0aa178ee590492fae982156231307&q=${dato}&days=5&aqi=no&alerts=no` })


  return (
    <div className="max-h-screen h-[calc(100vh-80px)] w-screen bg-sky-100">
      <Header />
      <main className="flex flex-col sm:flex-col h-full items-center justify-center mt-20 p-2 gap-20 ">
        <div className="flex flex-col justify-between p-5 rounded bg-sky-200 w-full sm:w-4/6 h-3/6 border-4 border-cyan-700 border-solid">
          <div className="flex flex-row w-full justify-between items-center text-center">
            <h1 className="text-4xl font-bold text-center text-sky-600">{tiempo?.location.name}</h1>
            <h1 className="text-4xl font-bold text-center text-sky-600">{tiempo?.current.temp_c}º</h1>
            <img src={tiempo?.current.condition.icon} alt={tiempo?.current.condition.text} />
          </div>
          <div className="flex flex-row w-full gap-3 justify-between overflow-x-auto">
            {
              tiempo?.forecast.forecastday.map((dia, index) => (
                <div className="border-4 border-cyan-700 border-solid rounded-lg" key={index}>
                  <h1 className="text-sky-600 font-semibold text-center">{dia.date}</h1>
                  <img src={dia.day.condition.icon} alt={tiempo?.current.condition.text} />
                  <h1>máximas: {dia.day.maxtemp_c}º</h1>
                  <h1>mínimas: {dia.day.mintemp_c}º</h1>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div>
              <Label name="Ciudad" type="text" label="Ciudad " value={dato} onChange={(e) => setDato(e.target.value)} />
            </div>
            <div>
              <Button text="Busca el tiempo" variant="filled" onClick={fetchTiempo} />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}