import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Root from './routes/root';
import ErrorPage from './error-page';
import Play from './routes/play';
import Congratulations from './routes/congratulations';

const router = createBrowserRouter([
  {
    path: "/chinese-flashcards",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chinese-flashcards/play",
    element: <Play />,
  },
  {
    path: "chinese-flashcards/congratulations",
    element: <Congratulations />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
