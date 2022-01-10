import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get initial users
    // const fetchUsers = async () => {
    //     setLoading()

    //     const res = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const data = await res.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // }

    return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext