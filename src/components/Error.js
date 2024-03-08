import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();

    return (
        <div className="error-container">
            <h1>Error Page</h1>
            <h2>Oops! Something went wrong!!!</h2>
            <h3>{error.data}</h3>
            <h4>{error.status}: {error.statusText}</h4>
        </div>
    )
}

export default Error;