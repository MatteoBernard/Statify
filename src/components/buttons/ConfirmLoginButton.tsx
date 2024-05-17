import {useAppSelector} from "../../redux";
import {Link} from "react-router-dom";

const ConfirmLoginButton = () => {

    const {user} = useAppSelector(state => state.auth)

    return (
        <Link to={"/dashboard"}>
            <div className={"imgContainer"}>
                <img src={user.images[0].url}/>
            </div>
            <p>Continue as {user.display_name}</p>
        </Link>
    );
}

export default ConfirmLoginButton;