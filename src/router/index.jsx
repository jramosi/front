import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import WebLayout from "../layouts/WebLayout/WebLayout";
import GralLayout from "../layouts/Gral/GralLayout";

import AllUser from "../pages/admin/AllUser";
import Crear from "../pages/admin/Crear";

import Home from "../pages/web/Home";
import About from "../pages/web/About";
import Blog, { loaderBlog } from "../pages/web/Blog";
import Post, { loaderPost } from "../pages/web/Post";

import Auth from "../pages/gral/Auth";

import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GralLayout />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        /* path:'/',   se recomienda mas el index */
        element: <Auth />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AllUser />,
      },
      {
        path: "/admin/login",
        element: <Crear />,
      },
    ],
  },
  {
    path: "/web",
    element: <WebLayout />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        /* path:'/',   se recomienda mas el index */
        element: <Home />,
      },
      {
        path: "/web/about",
        element: <About />,
      },
      {
        path: "/web/blog",
        element: <Blog />,
        //loader sirve para cargar un api
        loader: loaderBlog,
      },
      {
        path: "/web/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
    ],
  },
]);
