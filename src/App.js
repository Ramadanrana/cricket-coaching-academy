
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Home/About';
import Facility from './Home/Facility';
import Home from './Home/Home';
import Main from './Layout/Main';
import Login from './Login/Login';
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
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
