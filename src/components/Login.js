import { useState } from "react";

const Login = () => {
  const [isSignInform, setSinInForm] = useState(true);
  const toggleForm = () => {
    setSinInForm(!isSignInform);
  };
  return (
    <div className="bg-violet-300 h-lvh flex items-center">
      <div className="mx-[450px] bg-white px-[20px] py-[30px] rounded-lg">
        <h1 className="py-4 text-center text-2xl font-bold text-violet-400">
          {isSignInform ? " Lemme Chat" : "Register"}
        </h1>
        <form className="flex flex-col gap-6 py-2">
          {!isSignInform && (
            <input
              type="text"
              placeholder="Full-name"
              className="p-4 w-[300px] rounded-lg border-2"
            ></input>
          )}
          <input
            className="p-4 w-[300px] rounded-lg border-2"
            type="text"
            placeholder="E-mail address"
          ></input>
          <input
            className="p-4 rounded-lg border-2"
            type="password"
            placeholder="password"
          ></input>
          <button className="bg-violet-400 p-4 rounded-lg text-white font-bold">
            {isSignInform ? "Sign In" : "Register"}
          </button>
          <p onClick={toggleForm} className="text-gray-400 mx-5 cursor-pointer">
            {isSignInform
              ? "You don't have an account? Sign Up"
              : "You have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
