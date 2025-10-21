import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sidebar-bg">
      <Header />
      <Sidebar />
      <main className="ml-[325px] pt-[103px]">
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      // Add other routes here later
      { path: '*', element: <div className="p-8">Page not found</div> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
