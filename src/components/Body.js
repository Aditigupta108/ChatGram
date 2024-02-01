import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import ChatPage from "./ChatPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chatpage",
      element: <ChatPage />,
    }
]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
