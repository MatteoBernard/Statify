import {store} from "../store";
import {setError, setLoading, setUser} from "../reducers/auth";
import {fetchUserDb} from "../api/spotify";

export const getUser = async (token: string) => {
    store.dispatch(setLoading())
    return fetchUserDb(token)
        .then(user => {
            store.dispatch(setUser(user))
            return Promise.resolve(user)
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}
