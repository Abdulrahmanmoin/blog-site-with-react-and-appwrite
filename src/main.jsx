import { Client } from 'appwrite';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, AllPosts, AddPost, EditPost, Post, Signup } from './pages/index.js'
import { AuthLayout, Login } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      )
    }, {
      path: "/signup",
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )
    },
    {
      path: "/all-posts",
      element: (
        <AuthLayout authentication>
          {" "}
          <AllPosts />
        </AuthLayout>
      )
    },
    {
      path: "/add-post",
      element: (
        <AuthLayout authentication>
          {" "}
          <AddPost />
        </AuthLayout>
      )
    },
    {
      path: "/edit-post/:slug",
      element: (
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      )
    },
    {
      path: "/posts/:slug",
      element: <Post />
    }
    ]
  }
])

const client = new Client();
client.setProject('66dfe445003a79fe1875');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
