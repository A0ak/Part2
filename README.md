# 2.20: Data for countries step3

The changes and new methods implemented in the new stage of your application are as follows:

## App.jsx

  1. Importing weatherService: This service is used to fetch weather information for a specific country.

  2. Addition of weather state variable: This variable stores the weather information of the selected country.

  3. Fetching weather information in handleShowClick function: If the selected country has a capital, the weatherService.getWeather function is called and the returned weather information is set to the weather state variable.

  4. Displaying weather information in the rendered JSX: If the weather state variable is not null, i.e., if the weather information was successfully fetched, this information is displayed to the user. The weather information includes the temperature and wind speed in the capital of the selected country.

These changes allow the user to see the weather information of a country when they select it. This enhances the user experience of the application and allows the user to access the information they need more quickly.

## weatherService.js

This file is a weather service module used to retrieve weather data from the OpenWeatherMap API for a specific city.

  1. I used the axios library again as the HTTP client.

  2. const baseUrl = 'http://api.openweathermap.org/data/2.5/weather': This is the base URL for the OpenWeatherMap API endpoint that provides the weather data.

  3. const apiKey = import.meta.env.VITE_SOME_KEY: This retrieves the API key for the OpenWeatherMap API from environment variables. The actual API key should be written instead of VITE_SOME_KEY.

  4. const getWeather = (city) => {...}: This is a function that takes a city name as an argument and returns a promise that resolves with the weather data for that city. It constructs the request URL by combining the base URL, the city name, the API key, and the units of measurement (metric), and then it makes a GET request to that URL using axios.

## Operating 

Commands to run the project:

  1 `$env:VITE_SOME_KEY="5lkb6e48ft55f9a1ha6849572e7aa8e3"` : This key is not the real API key.

  2.`npm run dev`

