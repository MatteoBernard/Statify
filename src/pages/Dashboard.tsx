import {useAppSelector} from "../redux";
import {Link} from "react-router-dom";

export const Dashboard = () => {

    const {user} = useAppSelector(state => state.auth);

    return (
        <div>
            <h1>Dashboard</h1>

            <div>
                <h2>Profile datas</h2>

                <h3>{user.display_name}</h3>
                <img src={user.images[0].url} alt={user.display_name}/>
            </div>

            <div>
                <h2>Stats</h2>
                <Link to={"/topArtists"}>Top artists</Link>
                <Link to={"/topTracks"}>Top tracks</Link>
                <Link to={"/playlists"}>My playlists</Link>
                <Link to={"/recentlyPlayed"}>Recently played</Link>
            </div>
        </div>
    )
}