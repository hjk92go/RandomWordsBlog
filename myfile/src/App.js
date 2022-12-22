import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LoginForm from './components/LoginForm';
import Guest from './Pages/Guest';
import Board from './Pages/Board';
import BoardPage from './Pages/BoardPage';
import BoardWriteForm from './Pages/BoardWriteForm';


// Routes와 Route를 이용하여 화면 관리
function App() {
  return (
    <div>
      {/**고정할 화면이 있다면 Routes의 바깥에 두거나, Layout사용 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/loginform' element={<LoginForm />}></Route>
        <Route path='/guest' element={<Guest />}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/board/:id' element={<BoardPage />}></Route>
        <Route path='/board/modifyform' element={<BoardWriteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;