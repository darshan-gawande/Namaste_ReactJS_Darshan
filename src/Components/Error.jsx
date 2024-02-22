import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    
    return (
        <div>
            <h1>Oops!!!</h1>
            <h3>Something went wrong</h3>
            <h4>{err.status} : {err.statusText} </h4>
        </div>
    )
};

export default Error;
