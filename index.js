import React from 'react';
import ReactDOM from 'react-dom/client';
import Template from './pages/Template/template.component';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Home from './pages/Home/home.component';
import Hotelpage from './pages/Hotels/hotel-page.component';
import DetailsHotel from './pages/hotel-detail/details-hotel.component';
import SignUp from './pages/Sign up and sign in/signUp.component';
import SignIn from './pages/Sign up and sign in/signIn.component';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />, // Main template with header, footer, etc.
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Hotels',
        element: <Hotelpage />
      },
      {
        path: '/Hotels/detail/:id',
        element: <DetailsHotel />,
      },
    ]
  },
  // Separate route for SignUp with no layout
  {
    path: '/Hotels/SignUp',
    element: <SignUp />, // No Template, just SignUp page
  },
  {
    path: '/Hotels/SignIn',
    element: <SignIn />, // No Template, just SignUp page
  }
]);

  root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );

