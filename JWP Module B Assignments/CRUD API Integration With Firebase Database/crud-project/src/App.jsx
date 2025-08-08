import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import CreateUser from "./Screens/CreateUser";
import EditUser from "./Screens/EditUser";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;