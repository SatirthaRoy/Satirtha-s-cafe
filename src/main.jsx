import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Provider from './Provider/Provider.jsx';

// tan stack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { router } from './Routes/Route.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
