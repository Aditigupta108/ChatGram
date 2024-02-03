import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";
const ChatPage = () => {
  return (
    <div className="bg-violet-300 h-lvh flex items-center">
      <div className="bg-white mx-[180px] w-10/12 h-4/5 rounded-lg flex gap-48 overflow-hidden">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};
export default ChatPage;
