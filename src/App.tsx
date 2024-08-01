import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateLayout from "./components/PrivateLayout";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Vacantes from "./views/Vacantes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vacantes" element={<Vacantes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
