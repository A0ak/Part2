import { useState, useEffect, useRef } from 'react'
import countryService from './api'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)


  const detailsRef = useRef(null)


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
    setSelectedCountry(null);
  }


  const handleShowClick = (country) => {
    setSelectedCountry(country);
    detailsRef.current.scrollIntoView({ behavior: 'smooth' })
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
        {filteredCountries.map((country) =>
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShowClick(country)}>Show</button>
          </div>
        )}
        <div ref={detailsRef}>
          {selectedCountry && (
            <div>
              <h2>{selectedCountry.name.common}</h2>            
              <p>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</p>
              <p>Population: {selectedCountry.population}</p>
              <h3>Languages</h3>            
              <ul>
                {selectedCountry.languages ? Object.values(selectedCountry.languages).map((language, i) =>
                  <li key={i}>{language}</li>
                ) : <li>N/A</li>}
              </ul>
              <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default App


