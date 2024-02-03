import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
    </Route>
  ));

  return (
    <>
    <RouterProvider router={router} />
      <BrowserRouter>
      <Home />
      </BrowserRouter>
      </>
  )
}

export default App
