import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRoute, ContactRoute } from './pages/Route';

const router = createBrowserRouter([ContactRoute, RootRoute], {});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
