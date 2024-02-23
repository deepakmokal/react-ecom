import "./App.scss";
import "./assets/css/scss/pages/_mb-footer.scss";
import "./assets/css/scss/pages/_product-wrapper.scss";

import Modal from "react-modal";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Brands from "./components/Pages/Brands";
import JustIn from "./components/Pages/JustIn";
import Kids from "./components/Pages/Kids";
import Men from "./components/Pages/Men";
import New from "./components/Pages/New";
import Preowned from "./components/Pages/Preowned";
import Watches from "./components/Pages/Watches";
import Women from "./components/Pages/Women";
import Error from "./components/common/Error";
import Landing from "./components/common/Landing";


Modal.setAppElement("#root");

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <Error />,
      children: [
        {
          path: "new",
          element: <New />,
           
          errorElement: <Error />,
        },
        {
          index: true,
          element: <Preowned />,
          errorElement: <Error />,
        },
        {
          path: "preowned",
          element: <Preowned />,
          errorElement: <Error />,

          children: [
            {
              path: "justin",
              element: <JustIn />,
              errorElement: <Error />,
            },
            {
              path: "brands",
              element: <Brands />,
              errorElement: <Error />,
            },
            {
              path: "women",
              element: <Women />,
              errorElement: <Error />,
            },
            {
              path: "men",
              element: <Men />,
              errorElement: <Error />,
            },
            {
              path: "kids",
              element: <Kids />,
              errorElement: <Error />,
            },
            {
              index: true,
              element: <Watches />,
              errorElement: <Error />,
            },
            {
              path: "watches",
              element: <Watches />,
              errorElement: <Error />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
