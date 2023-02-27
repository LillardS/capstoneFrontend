import { createContext, useReducer } from "react";

// create context for all attractions
export const AttractionsContext = createContext();

// function that enables the context provider to recieve the attractions state and type of action
export const attractionsReducer = (state, action) => {

    // decides what to return based on if all attractions are set, if a new attraction is made, or if one is deleted
    switch (action.type) {
        case 'SET_ATTRACTIONS':
            return {
                attractions: action.payload
            }
        case 'CREATE_ATTRACTION':
            return {
                attractions: [action.payload, ...state.attractions]
            }
        case 'DELETE_ATTRACTION':
            return {
                attractions: state.attractions.filter((a) => a._id !== action.payload._id)
            }
        case 'UPDATE_ATTRACTION':
            return {
                attractions: [action.payload, ...state.attractions.filter((a) => a._id !== action.payload._id)]
            }
        default:
            return state;
    }
}


// custom component that wraps and provides attractions context to its children
export const AttractionsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(attractionsReducer, {

        // initial state
        attractions: null
    });

    return (

        // wraps the entire application inside index.js
        <AttractionsContext.Provider value={{...state, dispatch}}>
            { children }
        </AttractionsContext.Provider>
    );
}