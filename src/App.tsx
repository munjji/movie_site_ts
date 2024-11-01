import "./App.css";
import Movies from "./components/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RootLayout from "./layout/root-layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieCategory from "./pages/MovieCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MovieCategory />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
