
import PropTypes from "prop-types";
import { createContext,useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({children}) =>{

    const [configData, setConfigData] = useState({
        headerColor: "#E6391D",
        headerFontColor: "#ffffff",
        backgroundColor: "#EBE5E0",
        botName: "Greebo",
        chatFontColor: "#000000",
        avatarImg: "/src/assets/1.jpg",
        launcherImg: "/src/assets/2.jpg",
        fontFamily: "Arial",
        configName: "config-1"
    });

   
    const handleAlldata = (name, value) =>{
        setConfigData({...configData, [name]: value})
    }

    const handleFileUpload = (file, targetName) => {
        const validTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (file && validTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setConfigData((prev) => ({ ...prev, [targetName]: e.target.result }));
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid PNG or JPG image.");
        }
    };

    const downloadConfig = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(configData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${configData.configName}.json`);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleLoadConfig = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/json") {
          const reader = new FileReader();
          reader.onload = () => {
            try {
              const parsedConfig = JSON.parse(reader.result);
              setConfigData(parsedConfig);  // Update state with parsed config data
            } catch (error) {
              alert("Invalid JSON format.");
              console.log(error)
            }
          };
          reader.readAsText(file);
        } else {
          alert("Please upload a valid JSON file.");
        }
      };

    const contextValue = {
        configData,
        setConfigData,
        handleAlldata,
        handleFileUpload,
        downloadConfig,
        handleLoadConfig,
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
