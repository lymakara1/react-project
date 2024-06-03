import React, { useContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, AboutUs, ErrorPage, Documents } from "./pages/index";
import RootLayout from "./layouts/RootLayout";
import { ShareText } from "./components/ShareText";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Documents",
        element: <Documents />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  let defaultText = "Welcome to Textboard 123";
  const [text, setText] = useState(defaultText);
  return (
    <ShareText.Provider value={{ text, setText }}>
      <RouterProvider router={router} />
    </ShareText.Provider>
  );
}

export default App;
