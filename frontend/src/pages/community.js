// CommunityPage.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/common/Title";
import Nav from "../components/Nav";

const CommunityPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const containerRef = useRef();

  // const [heartValue, setHeartValue] = useState(Number(localStorage.getItem('heartValue')) || 0);

  useEffect(() => {
    // localStorage에서 데이터 불러오기
    const savedData = JSON.parse(localStorage.getItem("communityData")) || [];
    if (savedData.length === 0) {
      const dummyData = [
        {
          user_name: "익명의 율전이",
          title: "메뉴를 다양하게 해주세요!!",
          content:
            "가격은 정말 좋은데.. 메뉴의 다양성이 한정적인거 같아요!! 좀 더 다양한 메뉴를 원합니다..! ㅠㅠ 음식의 맛은 좋아요!!",
          timestamp: "2023.10.27 23:09",
        },
        {
          user_name: "익명",
          title: "식당 운영시간 개선부탁드립니다..!",
          content:
            "학생식당 운영이 저녁에는 진행을 안해서 저녁 끼니 해결이 어렵습니다..ㅜ 혹시 작게나마 저녁 식사를 열 순 없을까요? 원하는 인원도 많을 것 같습니다!",
          timestamp: "2023.10.28 13:18",
        },
        {
          user_name: "익명의 율전이",
          title: "밥 양을 자율적으로 하게 해주세요!",
          content:
            "밥 양을 받을때마다 제공해주시는 직원분에 따라 밥양이 달라져서 밥을 개인이 직접 원하는 만큼 가져갈 수 있도록 밥솥이 놓여있으면 좋겠어요!",
          timestamp: "2023.11.15 11:28",
        },
        // 필요한 만큼 더미 데이터를 추가
      ];

      localStorage.setItem("communityData", JSON.stringify(dummyData));
      setPosts(dummyData);
    } else {
      setPosts(savedData);
    }

    // setHeartValue(Number(localStorage.getItem('heartValue')) || 0);
  }, []);

  const handlePostClick = (index) => {
    // 클릭한 게시글의 정보를 localStorage에 저장

    if (posts[index]) {
      // 클릭한 게시글의 정보를 localStorage에 저장
      const postId = index + 1; // 클릭한 게시글의 인덱스를 1부터 시작하는 숫자로 변환
      localStorage.setItem("selectedPostId", postId);
      console.log(localStorage.getItem("selectedPostId"));

      const selectedPost = posts[index];
      localStorage.setItem("selectedPost", JSON.stringify(selectedPost));
      // "/detailwrite"로 이동
      navigate("/detail");
    }
  };

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
          .posts-container {
            height: 590px;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #C5E1A5 #EAF5E7;
            max-height: 700px; /* 스크롤 바의 최대 높이 */
            min-height: 200px;
            
          }
          .posts-container::-webkit-scrollbar {
            width: 6px;
          }
          .posts-container::-webkit-scrollbar-thumb {
            background-color: #C5E1A5;
            border-radius: 4px;
          }
          .posts-container::-webkit-scrollbar-track {
            background-color: #EAF5E7;
          }
          .post-container {
            margin: 20px;
            padding: 10px;
            height: 100px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
          }
          .post-image {
            width: 70px;
            height: 70px;
            border-radius: 10px;
          }

          .post-content {
            width: 150px;
            margin-left: 10px;
            font-size: 15px;
            flex-grow: 1;
            font-family: pretendard;
          }
          .post-content p {
            margin-bottom: 5px;
          }
          .name {
            font-weight: bold;
          }
          .post-actions {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 60px;
          }
          .heart-icon,
          .comment-icon {
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin-left: 10px;
          }
          .post-actions div {
            margin-left: 10px;
            font-size: 12px;
          }
        `}
      </style>
      <section className="h-812">
        <Title title={<img src={process.env.PUBLIC_URL + "/images/Q&A.svg"} alt="Q&A" />} />

        {/* 글 목록 */}
        <div className="posts-container" ref={containerRef}>
          {posts.map((post, index) => {
            // 해당 포스트의 heartValue 가져오기
            const postHeartValue = localStorage.getItem(`post_${index + 1}`)
              ? JSON.parse(localStorage.getItem(`post_${index + 1}`)).heartValue
              : 0;
            const postCommentsLength = localStorage.getItem(`post_${index + 1}`)
              ? JSON.parse(localStorage.getItem(`post_${index + 1}`)).comments?.length || 0
              : 0;

            return (
              <div key={index} className="post-container" onClick={() => handlePostClick(index)}>
                <div className="post-image">
                  <img
                    src={
                      post.user_name === "익명"
                        ? process.env.PUBLIC_URL + "/images/성균관대학교.svg"
                        : process.env.PUBLIC_URL + "/images/율전이.svg"
                    }
                    alt={post.user_name === "익명" ? "성균관대학교" : "율전이"}
                  />
                </div>
                <div className="post-content">
                  <p className="name">{post.user_name}</p>
                  <p>{post.title}</p>
                </div>
                <div className="post-actions">
                  <img className="heart-icon" src={process.env.PUBLIC_URL + "/images/하트.svg"} alt="Heart Icon" />
                  <div className="heart-value">{postHeartValue}</div>
                  <img className="comment-icon" src={process.env.PUBLIC_URL + "/images/댓글.svg"} alt="Comment Icon" />
                  <div>{postCommentsLength}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 글 작성 버튼 */}
        <img
          src={process.env.PUBLIC_URL + "/images/글쓰기.svg"}
          alt="Write Button"
          className="write-button"
          onClick={() => {
            // "/write"로 이동
            navigate("/write");
          }}
        />
      </section>
      <Nav page="community" />
    </main>
  );
};

export default CommunityPage;
