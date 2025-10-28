export interface WeatherData {
  temp: number;
  feelsLike: number;
  conditions: string;
  description: string;
  humidity: number;
  windSpeed: number;
  location: string;
}

export interface UserSelections {
  zipCode: string;
  behavior: string;
  personality: string;
}
