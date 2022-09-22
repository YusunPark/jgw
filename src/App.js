import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Topbar';
import User from './page/User';
import Notice from './page/Notice';
import Free from './page/Free';
import Info from './page/Info';
import Seminar from './page/Seminar';
import Calendar from './page/Calendar';
import Attend from './page/Attend';
import Solution from './page/Solution';

function App() {
  return (
    <div className="px-20 py-10">
      <Topbar />
      <Routes>
        <Route path="/board">
          <Route path="notice" element={<Notice />} />
          <Route path="free" element={<Free />} />
          <Route path="info" element={<Info />} />
          <Route path="seminar" element={<Seminar />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="attend" element={<Attend />} />
          <Route path="solution" element={<Solution />} />
        </Route>
        <Route path="/user" element={<User />}>
          <Route path="login" element={<div>로그인</div>} />
          <Route path="signup" element={<div>회원가입</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
