import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hive from "./pages/HIve";
import Content from "./pages/Content";
import NewAccount from "./pages/NewAccount";
import CreateContent from "./pages/CreateContent";
import CreateHive from "./pages/CreateHive";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/createContent" element={<CreateContent />} />
        <Route path="/createHive" element={<CreateHive />} />
        <Route path="/createAccount" element={<NewAccount />} />
        <Route path="/new" element={<NewAccount />}></Route>
        <Route path="content/uuid/:uuid" element={<Content />}></Route>
        <Route path="hive/uuid/:hiveUuid/content" element={<Hive />}></Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
