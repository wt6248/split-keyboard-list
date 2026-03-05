import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { CatalogPage } from './pages/catalog/CatalogPage'
import { AboutPage } from './pages/AboutPage';
import TablePage from './pages/table/TablePage';
import ProtectedRoute from './pages/ProtectedRoute';
import LoginPage from './pages/LoginPage';

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
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'table',
        element: 
        <ProtectedRoute>
      <TablePage />
    </ProtectedRoute>
      }
    ]
  }
], {basename: '/split-keyboard-list'})

export default Router
