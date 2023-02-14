import { AttractionsContext } from "../context/AttractionsContext";
import { useContext } from "react";

export const useAttractionsContext = () => {
    const context = useContext(AttractionsContext);

    if (!context) {
        throw Error('useAttractionContext must be used inside an AttractionsContextProvider');
    }

    return context;
}