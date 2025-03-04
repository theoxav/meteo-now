import axios from 'axios';

export class MeteoAPI {
  /**
   * Fetches current weather data from coordinates.
   *
   * @param {Object} coords - Coordinates object (e.g., { lat: 48.8566, lng: 2.3522 })
   * @returns {Object} - Weather data from the API.
   * @throws {Error} - Throws error if the request fails.
   */
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

  /**
   * Fetches the city name from coordinates.
   *
   * @param {Object} coords - Coordinates object (e.g., { lat: 48.8566, lng: 2.3522 })
   * @returns {string} - City name or "Unknown City" if not found.
   * @throws {Error} - Throws error if the request fails.
   */
  static async fetchCityFromCoords(coords) {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_NOMINATIM_API_URL}&lat=${coords.lat}&lon=${coords.lng}`,
        {
          headers: {
            'User-Agent': 'MonAppMeteo/1.0 (johndoe@example.com)', // Make sure to comply with API usage terms
          },
        }
      );

      return (
        response.data?.address?.town ||
        response.data?.address?.city ||
        'Unknown City'
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Fetches the geographical coordinates (latitude and longitude) of a given city.
   *
   * @param {string} city - The name of the city to retrieve coordinates for.
   * @returns {Promise<{ lat: number, lng: number }>} - An object containing the city's latitude and longitude.
   * @throws {Error} - Throws an error if the request fails.
   */
  static async fetchCoordsFromCity(city) {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_GEOCODING_API_URL}/search?name=${city}&language=fr&count=1`
      );

      if (
        !response.data ||
        !response.data.results ||
        response.data.results.length === 0
      ) {
        return { error: `No coordinates found for city: ${city}` };
      }

      const { latitude: lat, longitude: lng } = response.data.results[0];
      return { lat, lng };
    } catch (error) {
      return { error: `Error fetching coordinates for city: ${city}` };
    }
  }
}
