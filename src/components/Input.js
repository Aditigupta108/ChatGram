

const  Input=()=>{
    return(
        <div className="mt-[200px] flex -ml-48 justify-between gap-5">
            <input className="border-none outline-none m-2"
            type="text" placeholder="Type something..." />
            <div className="flex">
                <img src="" alt="Attach"></img>
                <input type="file" />
                <label htmlFor="file">
                    <img src="" alt=""></img>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
};
export default Input;
