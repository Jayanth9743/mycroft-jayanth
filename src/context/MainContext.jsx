
import PropTypes from "prop-types";
import { createContext,useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({children}) =>{

    const [state, setState] = useState();

    const contextValue = {
        state,
        setState
    }
    
    return(
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}

MainContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainContextProvider;
