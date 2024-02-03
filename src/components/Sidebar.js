import Nav from "./Nav";
import  Search  from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-indigo-900 w-72 p-4 h-full">
        <div>
          <Nav />
          <Search />
          <Chats />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
