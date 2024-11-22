import { FiUpload } from "react-icons/fi";

const Form = () => {
  return (
    <div className="flex justify-center w-1/2 h-full items-center gap-6 rounded-lg flex-col bg-[#ebebeb]">

      <div className=" flex justify-start items-center w-3/4">
        <button className="w-24 h-8 bg-black text-white rounded-md">load config</button>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="config-name">Config name</label>
        <input className="w-full p-1 outline-none bg-white rounded" type="text" id="config-name" name="config-name" />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="bot-name">BotName</label>
        <input className="w-full p-1 outline-none bg-white rounded" type="text" id="bot-name" name="bot-name" />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="font-family">Font family</label>
        <select name="font-family" id="font-family" className="w-full p-1 outline-none bg-white rounded">
          <option value="">asd</option>
          <option value="">asd</option>
          <option value="">asd</option>
          <option value="">asd</option>
        </select>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="header-color">Header color</label>
        <div className="w-full flex justify-between h-8 items-center bg-white rounded">
          <p className=" ml-2">sfds</p>
          <input name="header-color" id="header-color" type="color" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="header-font-color">Header font color</label>
        <div className="w-full flex justify-between h-8 items-center bg-white rounded">
          <p className=" ml-2">sfds</p>
          <input name="header-font-color" id="header-font-color" type="color" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold" htmlFor="background-color">Background color</label>
        <div className="w-full flex justify-between h-8 items-center bg-white rounded">
          <p className=" ml-2">sfds</p>
          <input name="background-color" id="background-color" type="color" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <label className="font-semibold"  htmlFor="chat-font-color">Chat font color</label>
        <div className="w-full flex justify-between h-8 items-center bg-white rounded">
          <p className="ml-2">sfds</p>
          <input name="chat-font-color" id="chat-font-color" type="color" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <p className="font-semibold">Avatar image</p>
        <label className="w-full flex h-8 justify-between items-center bg-white rounded" htmlFor="avatar-image">
          <img src="" alt="" />
          <FiUpload className="text-lg cursor-pointer mr-2"/> 
        </label>
        <input type="file" id="avatar-image" className=" hidden" />
      </div>

      <div className="flex justify-center flex-col gap-1 items-start w-3/4">
        <p className="font-semibold">Launcher image</p>
        <label className="w-full flex h-8 justify-between items-center bg-white rounded" htmlFor="launcher-image">
          <img src="" alt="" />
          <FiUpload className="text-lg cursor-pointer mr-2"/> 
        </label>
        <input type="file" id="launcher-image" className=" hidden" />
      </div>

    </div>
  )
}

export default Form
