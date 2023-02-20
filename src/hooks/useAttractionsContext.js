import { AttractionsContext } from "../context/AttractionsContext";
import { useContext } from "react";

// check the context
export const useAttractionsContext = () => {

    // takes in the context for all attractions
    const context = useContext(AttractionsContext);

    // ensures context is being used within its proper provider and throws an error if not
    if (!context) {
        throw Error('useAttractionContext must be used inside an AttractionsContextProvider');
    }

    // return the context
    return context;
}