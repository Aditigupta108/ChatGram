const Nav = () => {
  return (
    <div className="flex items-center justify-between h-[60px] p-2 bg-indigo-950 text-white -mt-[15px] -m-4">
      <span className="font-bold text-xs">Lemme Chat</span>
      <div>
        <span className="p-3 text-xs">Alex</span>
        <button
          type="submit"
          className="bg-indigo-900 p-2 px-1 text-xs font-bold"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Nav;
