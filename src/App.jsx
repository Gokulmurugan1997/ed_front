import React from 'react'
import AppRoutes from '../src/utils/Approutes.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  let router = createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App