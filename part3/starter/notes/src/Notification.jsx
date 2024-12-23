const Notification = ({ errorMessage, successMessage }) => {
    if (errorMessage === null && successMessage === null) {
        return null
    }

    if (errorMessage !== null) {
        return (
            <div className="error">
                {errorMessage}
            </div>
        )
    } else if (successMessage !== null) {
        return (
            <div className="success">
                {successMessage}
            </div>
        )
    }
}

export default Notification