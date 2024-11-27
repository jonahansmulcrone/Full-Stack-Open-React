import { useEffect, useState } from "react"
import axios from 'axios'
import DisplayedCountries from './components/DisplayedCountries'

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

  return (
    <div>
      <label htmlFor='country'>Search for a Country!</label>
      <input
        type='text'
        id='country'
        onChange={handleChange}>
      </input>
      <DisplayedCountries countries={countries} countrySearch={countrySearch} />
    </div>
  )
}

export default App