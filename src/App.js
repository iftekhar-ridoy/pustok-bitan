import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App({ children }) {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
