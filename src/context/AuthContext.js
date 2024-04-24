import { createContext, useContext, useReducer } from "react"
import { AuthReducer } from "./reducer/AuthReducer"
import { SetSessionStorage } from "../services/DataService"

const initialState = {
    isLoggedIn: false,
}

const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    function setLoggedIn(data) {
        SetSessionStorage(data)

        setTimeout(() => {
            setLoggedOut()
            alert('log out bro')
        }, 3600000);

        dispatch({
            type: 'LOGGED_IN',
            payload: {
                isLoggedIn: true
            }
        })
    }

    function setLoggedOut() {
        sessionStorage.removeItem('CodebookAuth')

        dispatch({
            type: 'LOGGED_OUT',
            payload: {
                isLoggedIn: false
            }
        })
    }

    const value = {
        isLoggedIn: state.isLoggedIn,
        setLoggedIn,
        setLoggedOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);