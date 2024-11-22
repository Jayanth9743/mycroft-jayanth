import { useContext } from "react";
import { FiUpload } from "react-icons/fi";
import { MainContext } from "../context/MainContext";

const Form = () => {

  const {configData,  handleAlldata, handleFileUpload, handleLoadConfig} = useContext(MainContext);

  return (
    <div className="flex justify-center w-1/2 h-full items-center gap-6 rounded-lg flex-col bg-[#efefef]">

      <div className=" flex justify-start items-center h-[2.5rem] w-3/4">
        <label htmlFor="jsonFile" className="w-[9rem] h-[2.5rem] cursor-pointer flex justify-center items-center text-center bg-black text-white rounded-xl">Load config</label>
        <input type="file" id="jsonFile" name="jsonFile" className="hidden" onChange={handleLoadConfig} />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="configName">Config name</label>
        <input className="w-full p-2 outline-none bg-white rounded"
            type="text" value={configData.configName} 
            onChange={(e)=>handleAlldata(e.target.name, e.target.value)} 
            id="configName" name="configName" />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="botName">BotName</label>
        <input className="w-full p-2 outline-none bg-white rounded" 
            type="text" 
            value={configData.botName}
            onChange={(e)=>handleAlldata(e.target.name, e.target.value)}
            id="botName" name="botName" />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="fontFamily">Font family</label>
        <select name="fontFamily" id="fontFamily" value={configData.fontFamily} onChange={(e)=>handleAlldata(e.target.name, e.target.value)}  className="w-full p-2 outline-none bg-white rounded">
          <option value="Serif">Serif</option>
          <option value="Arial">Arial</option>
          <option value="Cursive">Cursive</option>
          <option value="Monospace">Monospace</option>
        </select>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="headerColor">Header color</label>
        <div className="w-full flex justify-between h-10 items-center bg-white rounded">
          <p className=" ml-2">{configData.headerColor}</p>
          <div className="w-6 h-6 rounded-full border border-solid border-black flex justify-center items-center mr-2">
            <input name="headerColor"
              id="headerColor" 
              type="color"
                onChange={(e)=>handleAlldata(e.target.name, e.target.value)} 
              value={configData.headerColor} 
              style={{backgroundColor:configData.headerColor}}
              />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="headerFontColor">Header font color</label>
        <div className="w-full flex justify-between h-10 items-center bg-white rounded">
          <p className=" ml-2">{configData.headerFontColor}</p>
          <div className="w-6 h-6 rounded-full border border-solid border-black flex justify-center items-center mr-2">
            <input name="headerFontColor" id="headerFontColor" 
            type="color" value={configData.headerFontColor} 
            onChange={(e)=>handleAlldata(e.target.name, e.target.value)} 
            style={{backgroundColor:configData.headerFontColor}}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="backgroundColor">Background color</label>
        <div className="w-full flex justify-between h-10 items-center bg-white rounded">
          <p className=" ml-2">{configData.backgroundColor}</p>
          <div className="w-6 h-6 rounded-full border border-solid border-black flex justify-center items-center mr-2">
            <input name="backgroundColor" 
              id="backgroundColor" 
              type="color" 
              value={configData.backgroundColor} 
              onChange={(e)=>handleAlldata(e.target.name, e.target.value)} 
              style={{backgroundColor:configData.backgroundColor}}
              />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold"  htmlFor="chatFontColor">Chat font color</label>
        <div className="w-full flex justify-between h-10 items-center bg-white rounded">
          <p className="ml-2">{configData.chatFontColor}</p>
          <div className="w-6 h-6 rounded-full border border-solid border-black flex justify-center items-center mr-2">
            <input name="chatFontColor"
              id="chatFontColor" 
              type="color" 
              value={configData.chatFontColor}
              onChange={(e)=>handleAlldata(e.target.name, e.target.value)} 
                style={{backgroundColor:configData.chatFontColor}}
              />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <p className="font-semibold">Avatar image</p>
        <label className="w-full flex h-14 justify-between items-center bg-white rounded" htmlFor="avatar-image">
          <img src={configData.avatarImg} alt="" className="object-contain w-12 h-12"/>
          <FiUpload className="text-lg cursor-pointer mr-2"/> 
        </label>
        <input type="file" id="avatar-image" className=" hidden" onChange={(e) => handleFileUpload(e.target.files[0], "avatarImg")} />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <p className="font-semibold">Launcher image</p>
        <label className="w-full flex h-14 justify-between items-center bg-white rounded" htmlFor="launcher-image">
          <img src={configData.launcherImg} alt=""  className="object-contain w-12 h-12"/>
          <FiUpload className="text-lg cursor-pointer mr-2"/> 
        </label>
        <input type="file" id="launcher-image" className=" hidden" onChange={(e) => handleFileUpload(e.target.files[0], "launcherImg")} />
      </div>

    </div>
  )
}

export default Form
