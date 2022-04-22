import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigatite = useNavigate();
    const toHome = () => {
        navigatite('/');
    }
    return (
        <>
            <h4>This page does not display</h4>
            <p>There is failed to linked or page was being debugging. Please check that the link you are trying to open is correct.</p>

            <button 
                className="btn btn-primary"
                onClick={toHome}
            >
            
                Go To Home
            </button>
        </>
    )
}
export default NotFound;