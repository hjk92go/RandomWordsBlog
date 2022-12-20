import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Guest from "./Pages/Guest";

//Routes Route를 이용하여 화면 관리
function App() {
  return (
    <div className="App">
      {/**고정할 화면이 있다면 Route의 바깥에 두거나, Layout을 사용 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loginform" element={<LoginForm />}></Route>
        <Route path="/guest" element={<Guest />}></Route>
      </Routes>
    </div>
  );
}

export default App;
