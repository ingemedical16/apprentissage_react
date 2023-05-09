import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom';
import Home from './pages/HOMe';
import Products from './pages/Products';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';

/*
const routeDefintion = createRoutesFromElements(
  <Route>
    <Route path='/'element={<Home/>}/>
    <Route path='/products'element={<Products/>}/>
  </Route>
);
const router = createBrowserRouter(routeDefintion)
*/

// https://exemple.com/PATH

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/products',
        element: <Products />
      },
      {
        path:'/products/:id',
        element:<ProductDetails/>
      }  
    ]
  },
  
])
const App = ()=>{
  

  return <RouterProvider router={router}/>
}

export default App
