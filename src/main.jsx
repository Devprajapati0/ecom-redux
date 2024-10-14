
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './componenets/Home/Home.jsx'
import Cart from './componenets/Cart/Cart.jsx'
import Layout from './componenets/Layout.jsx'
import { Provider } from 'react-redux'
import Store from './app/Store.js'



const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route path='Cart' element={<Cart/>} />
      


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={rout} />
  </Provider>
)
