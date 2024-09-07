import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import LoadingPage from "./pages/LoadingPage";
import MainLayout from "./components/Layouts/MainLayout";
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
