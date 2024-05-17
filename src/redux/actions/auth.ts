import {store} from "../store";
import {setError, setLoading, setUser} from "../reducers/auth";
import {fetchUserDb} from "../api/spotify";

export const getUser = async (token: string) => {
    store.dispatch(setLoading())
    return fetchUserDb(token)
        .then(user => {
            store.dispatch(setUser(user))
            console.log(user)
            return Promise.resolve(user)
        })
        .catch(error => {
            console.error(error)
            console.log('erreur dans la recup de l user')
            store.dispatch(setError(error))
        })
}
