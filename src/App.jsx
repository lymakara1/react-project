import React, { useContext, useState } from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, AboutUs, ErrorPage, Documents } from "./pages/index";
import RootLayout from "./layouts/RootLayout";
import { ShareText } from "./components/ShareText";
import SpecialAnimation from "./components/SpecialAnimation";
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
// Importing fonts
import "@fontsource/hanuman"; // Defaults to weight 400
import "@fontsource/battambang"; // Defaults to weight 400
import "@fontsource/nokora"; // Defaults to weight 400
import "@fontsource/moul"; // Defaults to weight 400
import Special11 from "./Special11";
import Login from "./components/Login";

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
      {
        path: "/Special",
        element: <SpecialAnimation/>,
      },
      {
        path: "/SpecialORNG",
        element: <Login/>
      },
      {
        path: "/ORNGSpecial",
        element: <Special11/>
      }
    ],
  },
]);

function App() {
  let defaultText = "Welcome to GIC2B";
  const [text, setText] = useState(defaultText);
  const [fullscreen, setFullScreen] = useState(false);
  return (
    <ShareText.Provider value={{ text, setText, fullscreen, setFullScreen }}>
      <RouterProvider router={router} />      
    </ShareText.Provider>
  );
}

export default App;
