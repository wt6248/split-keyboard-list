import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { CatalogPage } from './pages/catalog/CatalogPage'
import { AboutPage } from './pages/AboutPage';
import TablePage from './pages/TablePage';

const Router = createBrowserRouter([
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
      },
      {
        path: 'table',
        element: <TablePage />
      }
    ]
  }
], {basename: '/split-keyboard-list'})

export default Router
