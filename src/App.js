import Login from "./pages/Login";
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
