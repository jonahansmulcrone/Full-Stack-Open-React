import Country from "./Country"
import Languages from "./Languages"
import Flag from "./Flag"
import { useState, useEffect } from "react"
import Weather from "./Weather"

const DisplayedCountries = ({ countries, countrySearch }) => {
    const [displayDetails, setDisplayDetails] = useState(false)
    const [currentDetails, setCurrentDetails] = useState([])

    useEffect(() => {
        if (displayDetails === true) {
            setDisplayDetails(false)
        }
    }, [countrySearch])

    const handleDisplayDetails = (selectedCountry) => {
        return [selectedCountry]
    }

    const toggleDisplayDetails = (country) => {
        setDisplayDetails(true)
        setCurrentDetails(country)
    }

    if (countries) {
        let countriesToShow = displayDetails ?
            handleDisplayDetails(currentDetails) :
            countries.filter((country) => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))

        if (countriesToShow.length < 10 && countriesToShow.length > 1) {
            return (
                <ul>
                    {countriesToShow.map((country, index) =>
                        <Country key={index} country={country} toggleDisplayDetails={toggleDisplayDetails} />
                    )}
                </ul>
            )
        } else if (countriesToShow.length == 1) {
            return (
                <div>
                    {countriesToShow.map((country, index) =>
                        <div key={index}>
                            <h1>
                                {country.name.common}
                            </h1>
                            <div>
                                Capital City: {country.capital}
                            </div>
                            <div>
                                Area: {country.area}
                            </div>
                            <br />
                            <Languages languages={country.languages} />
                            <Flag flagSource={country.flags['png']} />
                            <Weather capital={country.capital}/>
                        </div>
                    )}
                </div>
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

export default DisplayedCountries