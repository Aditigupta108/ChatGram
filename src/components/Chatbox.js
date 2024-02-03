import ChatNav from "./ChatNav";
import Messages from "./Messages";
import Input from "./Input";

const Chatbox = () => {
  return (
    <div className="bg-white w-96">
      <ChatNav />
      <div className="bg-pink-500">
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      </div>
      <Input />
    </div>
  );
};
export default Chatbox;
