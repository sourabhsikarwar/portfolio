import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Loader } from './components'

const LazyApp = React.lazy(() => import('./App'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>
)
