import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesTable from "./Screens/EmployeesTable";
import CreateEmployees from "./Screens/CreateEmployees";
import EditEmployees from "./Screens/EditEmployees";
import ViewDetails from "./Screens/ViewDetails";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EmployeesTable />} /> 
        <Route path="/CreateEmployees" element={<CreateEmployees />} />
        <Route path="/EditEmployees" element={<EditEmployees />} />
        <Route path="/EditEmployees/:id" element={<EditEmployees />} />
        <Route path="/viewdetails" element={<ViewDetails />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;



