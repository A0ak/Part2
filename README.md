# 2.18: Data for countries step1

Methods and functions used:

## App.jsx

- `useState` and `useEffect`: React hooks. useState is used to manage the state of the application, and useEffect is used to manage side effects (such as retrieving data from the API).

- `countries` and `setCountries`:It is the state variable created with the useState hook and the function used to update it. countries is an array containing information about countries retrieved from the API.
- `search` and `setSearch`:  It is the state variable created with the useState hook and the function used to update it. search is a string and contains the text the user entered in the search box.
- `useEffect` : The component receives data from the API when it is first rendered.
- `handleSearchChange` : This function saves the text entered by the user in the search box into the search status variable.
- `filteredCountries` : search Filters countries that contain the text in the status variable.

## api.js

- `axios` : This library is used to perform HTTP requests.
- `baseUrl` : This variable contains the URL of the API.
- `getAll` : This function retrieves all countries' information from the API. Sends a GET request to the API using the `axios.get` method and returns a Promise.

## Operating

Command to run the project:

- `npm run dev`: This command starts the user side of your application.

## Note

"It seems that 'https://studies.cs.helsinki.fi/restcountries/' is not the correct endpoint for the API. I was unable to fetch data from it. Instead, I utilized the API available at 'https://restcountries.com/v3.1/all'." 