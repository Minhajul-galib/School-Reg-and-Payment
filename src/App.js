import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ViewAllStudent from './Pages/ViewAllStudent/ViewAllStudent';
import AddStudentID from './Pages/AddStudentID/AddStudentID';
import SearchStudent from './Pages/SearchStudent/SearchStudent';
import StudentPayment from './Pages/StudentPayment/StudentPayment';
import ViewStudentById from './Pages/ViewStudentById/ViewStudentById';

function App() {
  return (
    <div className="App">
      <div className="App-div">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/ViewAllStudent' element={<ViewAllStudent/>} />
            <Route path='/AddStudentID' element={<AddStudentID/>} />
            <Route path='/SearchStudent' element={<SearchStudent/>} />
            <Route path='/StudentPayment' element={<StudentPayment/>} />
            <Route path='/ViewStudentById' element={<ViewStudentById/>} />
          </Routes>
      /</div>
    </div>
  );
}

export default App;
