import "./App.css";
import Movies from "./components/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>홈 페이지입니다.</h1>,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
