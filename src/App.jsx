import { useState, useEffect } from 'react'
import countryService from './api'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    countryService.getAll().then(response => {
      if (Array.isArray(response.data)) {
        setCountries(response.data)
      } else {
        console.error('Data is not an array:', response.data);
      }
    })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Country Info</h2>
      <div>
        Search: <input value={search} onChange={handleSearchChange} />
      </div>
      <div>
        {filteredCountries.length > 1 ? (
          filteredCountries.map((country) =>
            <p key={country.name.common}>
              {country.name.common}
            </p>
          )
        ) : (
          filteredCountries.length === 1 && (
            <div>
              <h2>{filteredCountries[0].name.common}</h2>
              <p>Capital: {filteredCountries[0].capital[0]}</p>
              <p>Population: {filteredCountries[0].population}</p>
              <h3>Languages</h3>
              <ul>
                {Object.values(filteredCountries[0].languages).map((language, i) =>
                  <li key={i}>{Object.values(language)[0]}</li>
                )}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App