import { Routes, Route } from "react-router-dom";
import PreHomeScreen from "./screens/PreHomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ErrorScreen from "./screens/ErrorScreen";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PreHomeScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
}

export default App;
