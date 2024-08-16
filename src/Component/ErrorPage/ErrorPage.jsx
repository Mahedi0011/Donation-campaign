import { useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center mt-9">
            <h3>This is error page</h3>
            <p>
                {
                error.statusText || error.message
                }
            </p>
        </div>
    );
};

export default ErrorPage;

