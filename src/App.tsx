import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRoute } from './pages/Route';

const router = createBrowserRouter([RootRoute], {});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
