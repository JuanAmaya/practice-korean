import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import VerbsPage from "./components/Pages/VerbsPage";
import LandingPage from "./components/Pages/LandingPage";
import NumbersPage from "./components/Pages/NumbersPage";
import WeekdaysPage from "./components/Pages/WeekdaysPage";
import SinoNumbersPage from "./components/Pages/SinoNumbersPage";

const router = createBrowserRouter([
  {
    path: "/practice-korean/",
    element: <LandingPage />,
  },
  {
    path: "/practice-korean/verbs",
    element: <VerbsPage />,
  },
  {
    path: "/practice-korean/pure-numbers",
    element: <NumbersPage />,
  },
  {
    path: "/practice-korean/sino-numbers",
    element: <SinoNumbersPage />,
  },
  {
    path: "/practice-korean/weekdays",
    element: <WeekdaysPage />,
  },
  {
    path: "*",
    element: <Navigate to="/practice-korean/" replace />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
