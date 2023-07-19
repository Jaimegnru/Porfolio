import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/App.routes.tsx'
import './index.css'
import { Provider } from './contexts/App.contexts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
