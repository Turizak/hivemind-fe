import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hive from "./pages/Hive";
import Content from "./pages/Content";
import NewAccount from "./pages/NewAccount";
import CreateContent from "./pages/CreateContent";
import CreateHive from "./pages/CreateHive";
import Login from "./pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<NewAccount />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/createContent" element={<CreateContent />} />
          <Route path="/createHive" element={<CreateHive />} />
          <Route path="content/uuid/:uuid" element={<Content />} />
          <Route path="hive/uuid/:hiveUuid/content" element={<Hive />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
