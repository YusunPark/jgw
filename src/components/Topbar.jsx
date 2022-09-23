import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  let [active, setActive] = useState('notice');
  const changeActive = (e) => {
    setActive(() => {
      return e.target.id;
    });
  };

  return (
    <div className="pb-10">
      {' '}
      <div className="px-4 pb-2 text-center text-4xl font-bold">Jaram</div>
      <hr />
      <div className="text-right py-2">
        <span className="px-1">돋보기</span>
        <Link to="/user/signup" className="px-1">
          회원가입
        </Link>
        <Link to="/user/login" className="px-1">
          로그인
        </Link>
      </div>
      <div className="flex flex-row flex-nowrap justify-around text-center pb-2">
        <Link
          to="/board/notice"
          id="notice"
          className={active === 'notice' ? 'text-[#F05454]' : ''}
          onClick={changeActive}
        >
          공지사항
        </Link>
        <Link to="/board/free" id="free" className={active === 'free' ? 'text-[#F05454]' : ''} onClick={changeActive}>
          자유 게시판
        </Link>
        <Link to="/board/info" id="info" className={active === 'info' ? 'text-[#F05454]' : ''} onClick={changeActive}>
          정보 게시판
        </Link>
        <Link
          to="/board/seminar"
          id="seminar"
          className={active === 'seminar' ? 'text-[#F05454]' : ''}
          onClick={changeActive}
        >
          세미나
        </Link>
        <Link
          to="/board/calendar"
          id="calendar"
          className={active === 'calendar' ? 'text-[#F05454]' : ''}
          onClick={changeActive}
        >
          일정
        </Link>
        <Link
          to="/board/attend"
          id="attend"
          className={active === 'attend' ? 'text-[#F05454]' : ''}
          onClick={changeActive}
        >
          출석체크
        </Link>
        <Link
          to="/board/solution"
          id="solution"
          className={active === 'solution' ? 'text-[#F05454]' : ''}
          onClick={changeActive}
        >
          족보
        </Link>
      </div>{' '}
      <hr />
    </div>
  );
}

export default Topbar;
