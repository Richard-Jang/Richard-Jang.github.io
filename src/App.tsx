import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRoute } from './pages/Route';

const router = createBrowserRouter([RootRoute], {
  basename: import.meta.env.PROD ? '/Richard-Jang.github.io/' : '/'
});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
