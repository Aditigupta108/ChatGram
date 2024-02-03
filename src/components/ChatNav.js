import Cam from "../utils/camera.png";
import Add from "../utils/Add.png";
import More from "../utils/option.png";

const ChatNav = () => {
  return (
    <div className="flex justify-between bg-violet-700 -ml-48 -mt-5 py-0.2">
      <div className="py-8  p-4 text-sm font-bold text-white">
        <span>Jane</span>
        </div>
        <div className="flex py-8 gap-4 p-[50px] py-4">
          <img className="w-4 h-4 cursor-pointer" src={Cam} alt="camera"></img>
          <img className="w-4 h-4 cursor-pointer" src={Add} alt="Add"></img>
          <img className="w-4 h-4 cursor-pointer" src={More} alt="More"></img>
        </div>
      </div>
    
  );
};
export default ChatNav;
