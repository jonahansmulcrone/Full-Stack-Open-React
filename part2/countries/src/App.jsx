import { useEffect, useState } from "react"
import axios from 'axios'
import Country from "./components/Country"

const App = () => {
  const [countrySearch, setCountrySearch] = useState('')
  const [countries, setCountries] = useState(null)

  const handleChange = (event) => {
    setCountrySearch(event.target.value)
  }

  useEffect(() => {
    if (countrySearch) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((res) => {
          setCountries(res.data)
        })
    }
  }, [countrySearch])

  const DisplayedCountries = ({ countries }) => {
    if (countries) {
      let countriesToShow
      countriesToShow = countries.filter((country) => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))
      if (countriesToShow.length < 10) {
        return (
          <ul>
            {countriesToShow.map((country, index) =>
              <Country key={index} country={country.name.common} />
            )}
          </ul>
        )
      } else {
        return (
          <div>Please narrow your search to be more specific.</div>
        )
      }
    } else {
      return (
        <div>Enter a Country</div>
      )
    }

  }

  return (
    <div>
      <label htmlFor='country'>Search for a Country!</label>
      <input
        type='text'
        defaultValue='United States'
        id='country'
        onChange={handleChange}>
      </input>
      <DisplayedCountries countries={countries} />
    </div>
  )
}

export default App