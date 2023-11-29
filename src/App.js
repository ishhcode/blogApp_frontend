import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Single from "./components/Single";
import Write from "./Pages/Write";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { useContext } from "react";
import {Context} from "./context/Context";



function App() {
  const {user} = useContext(Context);
  return (
    <Router>
        <Topbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route> 
          <Route path="/register" element={user? <Home /> : <Register />} ></Route>
          <Route path="/login" element={user? <Home /> : <Login />} ></Route>
          <Route path="/write" element={user? <Write /> : <Register />} ></Route>
          <Route path="/settings" element={user? <Settings /> : <Register />} ></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
           
        </Routes>
      </Router>
  );
}

export default App;
