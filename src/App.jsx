import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Henry from './pages/Henry'
import Aleck from './pages/Aleck'
import Andy from './pages/Andy'
import Shiming from './pages/Shiming'
import Jason from './pages/Jason'
import Joseph from './pages/Joseph'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="atc-portfolio">
      <Route index element = {<Home />} />
      <Route path="henry" element={<Henry />} />
      <Route path="aleck" element={<Aleck />} />
      <Route path="andy" element={<Andy />} />
      <Route path="shiming" element={<Shiming />} />
      <Route path="jason" element={<Jason />} />
      <Route path="joseph" element={<Joseph />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
