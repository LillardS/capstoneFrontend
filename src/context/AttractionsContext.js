import { createContext, useReducer } from "react";

export const AttractionsContext = createContext();

export const attractionsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ATTRACTIONS':
            return {
                attractions: action.payload
            }
        case 'CREATE_ATTRACTION':
            return {
                attractions: [action.payload, ...state.attractions]
            }
        default:
            return state;
    }
}

export const AttractionsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(attractionsReducer, {
        attractions: null
    });

    return (
        <AttractionsContext.Provider value={{...state, dispatch}}>
            { children }
        </AttractionsContext.Provider>
    );
}