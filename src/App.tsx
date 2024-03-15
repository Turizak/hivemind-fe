import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hive from "./pages/HIve";
import Content from "./pages/Content";
import NewAccount from "./pages/newAccount";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<NewAccount />}></Route>
          <Route path="content/uuid/:uuid" element={<Content />}></Route>
          <Route path="hive/uuid/:hiveUuid/content" element={<Hive />}></Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
