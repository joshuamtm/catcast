import type { WeatherData } from '../types';

// Convert zip code to coordinates using Nominatim (OpenStreetMap) - no API key required
async function zipToCoordinates(zipCode: string): Promise<{ lat: number; lon: number; location: string }> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${zipCode}&country=US&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'CatCast Weather App',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Location not found');
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error('Invalid zip code');
    }

    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      location: data[0].display_name.split(',')[0] || 'Your Location',
    };
  } catch (error) {
    console.error('Error converting zip to coordinates:', error);
    throw error;
  }
}

// Fetch weather data using Open-Meteo API - completely free, no API key required!
export async function fetchWeatherData(zipCode: string): Promise<WeatherData> {
  try {
    // First, convert zip code to coordinates
    const { lat, lon, location } = await zipToCoordinates(zipCode);

    // Fetch weather from Open-Meteo
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`
    );

    if (!response.ok) {
      throw new Error('Weather data not found');
    }

    const data = await response.json();
    const current = data.current;

    // Map weather codes to conditions
    const conditions = getWeatherCondition(current.weather_code);

    return {
      temp: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.temperature_2m), // Open-Meteo doesn't provide feels_like in basic tier
      conditions: conditions.main,
      description: conditions.description,
      humidity: current.relative_humidity_2m,
      windSpeed: Math.round(current.wind_speed_10m),
      location: location,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Map WMO Weather codes to readable conditions
// https://open-meteo.com/en/docs
function getWeatherCondition(code: number): { main: string; description: string } {
  if (code === 0) return { main: 'Clear', description: 'clear sky' };
  if (code <= 3) return { main: 'Clouds', description: 'partly cloudy' };
  if (code <= 49) return { main: 'Fog', description: 'foggy' };
  if (code <= 59) return { main: 'Drizzle', description: 'light drizzle' };
  if (code <= 69) return { main: 'Rain', description: 'rainy' };
  if (code <= 79) return { main: 'Snow', description: 'snowy' };
  if (code <= 84) return { main: 'Rain', description: 'rain showers' };
  if (code <= 86) return { main: 'Snow', description: 'snow showers' };
  if (code <= 99) return { main: 'Thunderstorm', description: 'thunderstorms' };
  return { main: 'Clear', description: 'clear' };
}

// Fetch cat image using The Cat API - no API key required for basic usage!
export async function fetchCatGif(_searchTerm?: string): Promise<string> {
  try {
    // The Cat API is free without a key for basic usage
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');

    if (!response.ok) {
      return getCatEmojiFallback();
    }

    const data = await response.json();

    if (data && data.length > 0) {
      return data[0].url;
    }

    return getCatEmojiFallback();
  } catch (error) {
    console.error('Error fetching cat image:', error);
    return getCatEmojiFallback();
  }
}

export async function fetchRandomCatGif(): Promise<string> {
  return fetchCatGif('random');
}

// Fallback: Return a data URI with a large cat emoji if API fails
function getCatEmojiFallback(): string {
  // Return empty string to trigger emoji fallback in component
  return '';
}
