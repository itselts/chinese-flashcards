import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Root from './routes/root';
import ErrorPage from './error-page';
import Play from './routes/play';

const router = createBrowserRouter([
  {
    path: "/chinese-flashcards",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chinese-flashcards/play/:Lvl",
    element: <Play />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
