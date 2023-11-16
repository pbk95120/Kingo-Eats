// CommunityPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/common/Title';
import Nav from '../components/Nav';

const CommunityPage = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // localStorage에서 데이터 불러오기
    const savedData = JSON.parse(localStorage.getItem('communityData')) || [];
    setPosts(savedData);
  }, []);

  return (
    <main>
      <style>
        {`
          body {
            background-color: #EAF5E7;
          }
          .write-button {
            position: fixed;
            right: 10px;
            top: 675px;
            cursor: pointer;
          }
          .post-container {
            margin: 20px;
            padding: 10px;
            height : 100px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
          }
          .post-image {
            width: 70px; /* 이미지 너비 조절 */
            height: 70px; /* 이미지 높이 조절 */
            border-radius: 10px; /* 이미지 테두리 둥글게 조절 */
          }
          
          .post-content {
            margin-left: 10px;
            font-size : 15px;
            flex-grow: 1;
            font-family : pretendard;
            
          }
          .post-content p {
            margin-bottom : 5px;
          }
          .name{
            font-weight : bold;
            
          }
          .post-actions {
            display: flex;
            align-items: flex-end;
            justify-content: space-between; /* 수정: 두 아이콘을 좌우로 배치 */
            margin-top: 60px; /* 수정: 상단 여백 추가 */
          }
          .heart-icon,
          .comment-icon {
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin-left: 10px;
          }
          .post-actions div{
            margin-left: 10px;
            font-size : 12px;
          }
        `}
      </style>
      <section className="h-812">
        <Title title={<img src={process.env.PUBLIC_URL + '/images/Q&A.svg'} alt="Q&A" />} />

        {/* 글 목록 */}
        {posts.map((post, index) => (
          <div key={index} className="post-container">
            <div className="post-image">
              <img
                src={post.user_name === "익명" ? process.env.PUBLIC_URL + '/images/성균관대학교.svg' : process.env.PUBLIC_URL + '/images/율전이.svg'}
                alt={post.user_name === "익명" ? "성균관대학교" : "율전이"}
              />
            </div>
            <div className="post-content">
              <p className= "name">{post.user_name}</p>
              <p>{post.content}</p>
            </div>
            <div className="post-actions">
              <img
                className="heart-icon"
                src={process.env.PUBLIC_URL + '/images/하트.svg'}
                alt="Heart Icon"
              />
              <div>0</div>
              <img
                className="comment-icon"
                src={process.env.PUBLIC_URL + '/images/댓글.svg'}
                alt="Comment Icon"
              />
              <div>0</div>
            </div>
          </div>
        ))}

        {/* 글 작성 버튼 */}
        <img
          src={process.env.PUBLIC_URL + '/images/글쓰기.svg'}
          alt="Write Button"
          className="write-button"
          onClick={() => {
            // "/write"로 이동
            navigate('/write');
          }}
        />
      </section>
      <Nav />
    </main>
  );
};

export default CommunityPage;
