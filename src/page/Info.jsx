import React from 'react';
import ListBox from '../components/ListBox';

function Info() {
  return (
    <div className="grid gap-2">
      <ListBox title="게시글 제목" content="게시글 내용" tag="# 공지 # 안내" date="2022-09-23" />
      <ListBox title="게시글 제목" content="게시글 내용" tag="# 공지" date="2022-09-23" />
      <ListBox title="게시글 제목" content="게시글 내용" tag="# 공지" date="2022-09-23" />
    </div>
  );
}

export default Info;
