import {Link} from "react-router-dom";

export const GoToDashboard = () => {
    return (
        <Link to="/dashboard">
            <button>Go to Dashboard</button>
        </Link>
    );
}