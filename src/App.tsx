import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Loader } from './components';

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
