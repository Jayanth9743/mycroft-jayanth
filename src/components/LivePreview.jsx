import { MdOutlineClear } from "react-icons/md";
import img from "../assets/react.svg"
import { IoMicOutline } from "react-icons/io5";

const LivePreview = () => {
  return (
    <div className="flex justify-center flex-col shadow-2xl  items-center w-1/2 h-full">

        <div className="flex justify-center mb-12 font-semibold items-center w-full gap-2">
          <p className="w-2 h-2 rounded-full bg-green-500"></p>
          <p>Live Preview</p>
        </div>

        <div className="w-3/5 h-[60%] flex flex-col justify-between shadow-left-right shadow-xl items-center">

            <div className="flex justify-between items-center rounded-t-xl w-full bg-[#E6391D] h-12">
              <p className="ml-2 text-white font-medium">Greebo</p>
              <MdOutlineClear className="text-white mr-2"/>
            </div>

            <div className="flex w-full justify-around items-center mb-60 gap-2">
              <img src={img} alt="" className="object-contain w-6 h-6 rounded-full" />
              <p className="w-5/6 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi a, dolorem quo culpa inventore aspernatur nam officiis.</p>
            </div>

            <div className="w-full rounded-b-xl shadow-md relative">
              <input type="text" className="w-full outline-none rounded-b-xl p-4" placeholder="Need help just type or say it" />
              <IoMicOutline className="absolute right-3 top-5 text-xl"/>
            </div>

        </div>

        <div className="relative w-3/5 mb-12 h-12">
          <img src={img} alt="" className="absolute top-0 right-0 object-contain w-12 h-12" />
        </div>

        <div className="flex justify-center items-center gap-2 w-full flex-col">
          <button className="w-[10rem] h-[2.5rem] rounded-xl bg-black text-white">Download config</button>
          <p>kdujfhsdf</p>
        </div>

    </div>
  )
}

export default LivePreview
