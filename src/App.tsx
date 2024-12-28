import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RootLayout from "./layout/root-layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieCategory from "./pages/MovieCategory";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./components/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />, // 기본 홈 페이지
      },
      {
        path: "movies",
        element: <MovieCategory />, // 영화 카테고리 페이지
        children: [
          {
            path: ":category", // 카테고리를 동적 경로로 처리
            element: <Movies />,
          },
        ],
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />, // 개별 영화 상세 페이지
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
    <div className="bg-black w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
