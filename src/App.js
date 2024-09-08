import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import LoadingPage from "./pages/LoadingPage";
import MainLayout from "./components/Layouts/MainLayout";
import ViewQuiz from "./pages/veiwQuiz/ViewQuiz";
import AddQuiz from "./pages/add-quiz/AddQuiz";
import EditQuiz from "./pages/edit-quiz/EditQuiz";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <ViewQuiz />
            </Suspense>
          ),
        },
        {
          path: "/add-quiz",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <AddQuiz />
            </Suspense>
          ),
        },
        {
          path: "/edit-quiz/:id",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <EditQuiz />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
