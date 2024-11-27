const Country = ({ country, toggleDisplayDetails }) => {
    return (
        <li>
            {country.name.common} <button onClick={() => toggleDisplayDetails(country)}>Show details</button>
        </li>
    )
}

export default Country