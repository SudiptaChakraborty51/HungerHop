import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

// Create a router for future routing needs
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about-us", element: <About /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
