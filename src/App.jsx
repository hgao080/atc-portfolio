import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Henry from './pages/Henry'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path='atc-portfolio' element={<Home />}/>
      <Route path='henry' element={<Henry />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
