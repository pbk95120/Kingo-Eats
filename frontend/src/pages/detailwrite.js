// DetailPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/common/Title';
import Nav from '../components/Nav';

const DetailPage = () => {

  // localStorage에서 선택된 게시글의 정보 가져오기
  const selectedPost = JSON.parse(localStorage.getItem('selectedPost')) || {};

  return (
    <main>
        <style>
        {`
          body {
            background-color: #EAF5E7;
          }
        `}
      </style>
      <section className="h-812">
        <Title title={<img src={process.env.PUBLIC_URL + '/images/Q&A.svg'} alt="Q&A" />} />

        {/* 선택된 게시글 정보 표시 */}
        <div>
          <p>User: {selectedPost.user_name}</p>
          <p>Content: {selectedPost.content}</p>
          <p>Content: {selectedPost.title}</p>
          {/* 기타 게시글 정보 표시 */}
        </div>
      </section>
      <Nav />
    </main>
  );
};

export default DetailPage;
