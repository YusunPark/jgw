import React from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div>
      {' '}
      <div className="px-4 text-center text-4xl">Jaram</div>
      <hr />
      <div className="text-right">
        <span className="px-1">돋보기</span>
        <span className="px-1">회원가입</span>
        <span className="px-1">로그인</span>
      </div>
      <div className="flex flex-row flex-nowrap   justify-evenly text-center ">
        <Link to="/board/notice">공지사항</Link>
        <Link to="/board/free">자유 게시판</Link>
        <Link to="/board/info">정보 게시판</Link>
        <Link to="/board/seminar">세미나</Link>
        <Link to="/board/calendar">일정</Link>
        <Link to="/board/attend">출석체크</Link>
        <Link to="/board/solution">족보</Link>
      </div>
    </div>
  );
}

export default Topbar;
