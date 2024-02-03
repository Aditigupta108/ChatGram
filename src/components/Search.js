

const Search = () => {
  return (
    <div className="mt-5 border-b border-gray-400 -m-4">
      <div className="py-2">
        <input
          type="text"
          className="p-2 border-none outline-none bg-indigo-900 -mt-[15px]"
          placeholder="Find the User"
        ></input>
      </div>
      <div className="flex gap-2 hover:bg-indigo-950">
        <img className="h-[45px] w-[45px] rounded-full object-cover mx-2 my-2"
        src="https://tv-fanatic-res.cloudinary.com/iu/s--l_MrDxcc--/t_full/cs_srgb,d_tv-fanatic-placeholder-square.png,f_auto,fl_strip_profile.lossy,q_auto:420/v1371126187/photo-of-max.png"></img> 
        <div className="flex flex-col">
          <span className="text-white mt-4">Alex</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
