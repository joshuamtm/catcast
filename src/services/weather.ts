import { WeatherData } from '../types';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '';
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY || '';

export async function fetchWeatherData(zipCode: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${OPENWEATHER_API_KEY}&units=imperial`
    );

    if (!response.ok) {
      throw new Error('Weather data not found for this zip code');
    }

    const data = await response.json();

    return {
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      conditions: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      location: data.name,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function fetchCatGif(searchTerm: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=cat ${searchTerm}&limit=1&rating=g`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cat GIF');
    }

    const data = await response.json();

    if (data.data && data.data.length > 0) {
      return data.data[0].images.fixed_height.url;
    }

    // Fallback to random cat GIF
    return fetchRandomCatGif();
  } catch (error) {
    console.error('Error fetching cat GIF:', error);
    return '';
  }
}

export async function fetchRandomCatGif(): Promise<string> {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=cat&rating=g`
    );

    if (!response.ok) {
      return '';
    }

    const data = await response.json();
    return data.data.images.fixed_height.url;
  } catch (error) {
    console.error('Error fetching random cat GIF:', error);
    return '';
  }
}
