import './App.css';
import {ToastContainer} from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { gapi } from "gapi-script";
function App() {
    gapi.load("client:auth2", () => {
        gapi.client.init({
            clientId:
                "648698059057-o3otmbdjboa6td84fd6luu0bnqhgvijn.apps.googleusercontent.com",
            plugin_name: "chat",
        });
    });
  return (
      <BrowserRouter>
    <div className="App">
      <ToastContainer />
     <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/register' element={<Register />}/>
     </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
