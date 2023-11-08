import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./page/signIn";
import LogIn from "./page/LogIn";
import Content from "./page/Content";
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
