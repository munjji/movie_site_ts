import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import RootLayout from "./layout/root-layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieCategory from "./pages/MovieCategory";
import Search from "./pages/Search";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MoviePage />,
      },
      {
        path: "movies",
        element: <MovieCategory />,
        children: [
          {
            index: true, // 기본 카테고리 목록 경로
            element: <MovieCategory />,
          },
          {
            path: ":category", // 카테고리 경로
            element: <MovieCategory />,
          },
          {
            path: ":movieId", // 영화 상세 경로
            element: <MovieCategory />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-black w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
