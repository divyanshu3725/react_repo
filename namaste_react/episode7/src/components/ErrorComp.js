import { useRouteError } from "react-router-dom";
import Header from "./Header";
const ErrorComp = () => {
    const errObj = useRouteError();
    // console.log(errObj);
    return (
        <>
            <Header/>
            <h1>Error Page 🚫 </h1>
            <h2>This is an error message</h2>
            <h3>{errObj.status}: {errObj.statusText}</h3>
        </>
    );
};
export default ErrorComp;