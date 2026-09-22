import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRoute, ContactRoute } from './pages/Route';

const router = createBrowserRouter([RootRoute, ContactRoute], {});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
