import { createHashRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { CatalogPage } from './pages/CatalogPage'
import { AboutPage } from './pages/AboutPage';

const Router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CatalogPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
])

export default Router
