import { MdOutlineClear } from "react-icons/md";
import { IoMicOutline } from "react-icons/io5";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const LivePreview = () => {

  const {configData, downloadConfig} = useContext(MainContext);

  return (
    <div className={`flex justify-center flex-col shadow-2xl  items-center w-1/2 h-full `} style={{ backgroundColor:configData.backgroundColor}}>

        <div className="flex justify-center mb-12 font-semibold items-center w-full gap-2">
          <p className="w-2 h-2 rounded-full bg-green-500"></p>
          <p>Live Preview</p>
        </div>

        <div className="w-3/5 h-[60%] flex flex-col justify-between shadow-left-right shadow-xl items-center" style={{fontFamily:configData.fontFamily}}>

            <div className={`flex justify-between items-center rounded-t-xl w-full h-12`} style={{ backgroundColor: configData.headerColor }}>
              <p className={`ml-2 font-medium`} style={{color:configData.headerFontColor}}>{configData.botName}</p>
              <MdOutlineClear style={{color:configData.headerFontColor}} className=" mr-2"/>
            </div>

            <div className="flex w-full justify-around items-center mb-64 gap-2">
              <img src={configData.avatarImg} alt="" className="object-contain w-10 h-10 rounded-full" />
              <p className={`w-5/6 text-start`} style={{color:configData.chatFontColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi a, dolorem quo culpa inventore aspernatur nam officiis.</p>
            </div>

            <div className="w-full rounded-b-xl shadow-md relative">
              <input type="text" className="w-full outline-none rounded-b-xl p-4" placeholder="Need help just type or say it" />
              <IoMicOutline className="absolute right-3 top-5 text-xl"/>
            </div>

        </div>

        <div className="flex justify-end items-start w-3/5 mb-12 h-16">
          <img src={configData.launcherImg} alt="" className="object-contain rounded-b-lg w-16 h-16" />
        </div>

        <div className="flex justify-center items-center gap-2 w-full flex-col">
          <button className="w-[10rem] h-[2.5rem] rounded-xl bg-black text-white" onClick={downloadConfig}>Download config</button>
          <p>{configData.configName}</p>
        </div>

    </div>
  )
}

export default LivePreview
