const Languages = ({ languages }) => {
    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>
                Languages
            </div>
            <div>
                <ul>
                    {Object.keys(languages).map((key, index) =>
                        <li key={index}>
                            {languages[key]}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Languages