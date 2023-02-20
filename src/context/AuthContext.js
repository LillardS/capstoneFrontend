import { createContext, useReducer } from "react";

// create context for authorizing users
export const AuthContext = createContext();

// function that enables the context provider to recieve the user state and type of action
export const authReducer = (state, action) => {

    // decides what to return if logging in/signing up or logging out
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

// custom component that wraps and provides auth context to its children
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {

        // initial state
        user: null
    });

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user'));

    //     if (user) {
    //         dispatch({ type: 'LOGIN', payload: user })
    //     }
    // }, []);

    // state of the authcontext in the console when context is provided
    console.log('AuthContext state:', state);

    return (

        // wraps the entire application inside index.js
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

}