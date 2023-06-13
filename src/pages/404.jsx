import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-3xl font-bold">Ooops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage