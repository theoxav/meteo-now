import axios from 'axios';

export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_OPEN_METEO_API_URL}?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
