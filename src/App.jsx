import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./Utils/AppRouter";

function App() {
  const router = createBrowserRouter(AppRouter);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
