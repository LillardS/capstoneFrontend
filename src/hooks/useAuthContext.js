import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// check the context
export const useAuthContext = () => {

    // takes in the context for all attractions
    const context = useContext(AuthContext);

    // ensures context is being used within its proper provider and throws an error if not
    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider');
    }

    // return the context 
    return context;
}