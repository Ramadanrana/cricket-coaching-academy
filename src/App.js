
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Adminmessage from './Admin/Adminmessage';
import Dashboard from './Admin/Dashboard';
import Admission from './Admission/Admission';
import './App.css';
import About from './Home/About';

import Contact from './Home/Contact';
import Facility from './Home/Facility';
import Home from './Home/Home';
import Main from './Layout/Main';
import Login from './Login/Login';
import Privateroute from './Privateroute/Privateroute';
import Signup from './Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/faci',
          element: <Facility></Facility>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/message',
          element: <Privateroute><Adminmessage></Adminmessage></Privateroute>
        },
        {
          path: '/dash',
          element: <Privateroute><Dashboard></Dashboard></Privateroute>
        },
        {
          path: '/add',
          element: <Privateroute><Admission></Admission></Privateroute>
        },
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
