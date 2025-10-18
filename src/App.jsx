import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from "../src/pages/Menu";


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/menu',
          element: <Menu />
        },

      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={route} >
        <Layout />
      </RouterProvider>
    </>
  )
}

export default App
