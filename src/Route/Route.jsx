import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
// import Team from "../Pages/Teams/Teams";
import About from "../Pages/About/About";
import Teams from "../Pages/Teams/Teams";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NotFound404 from "../Pages/NotFound404/NotFound404";
import Contact from "../Pages/Contact/Contact";
import ApiDocumentation from "../Pages/ApiDocumentation/ApiDocumentation";
// import { AiFillPauseCircle } from "react-icons/ai";
import FileUpload from "../Pages/FileUpload/FileUpload";
import Chat from "../Pages/Chat/Chat"
import FileExtraction from "../Pages/FileExtraction/FileExtraction";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/api-documentation",
        element: <ApiDocumentation />,
      },
      {
        path: "/fileupload",
        element: <FileUpload />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
      {
        path:"/chat",
        element: <Chat/>
      },
      {
        path:"/endpoints",
        element:<FileExtraction/>
      }
    ],
  },
]);

