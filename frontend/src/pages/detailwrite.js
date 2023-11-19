import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/common/Title";
import Nav from "../components/Nav";

const DetailPage = () => {
  const navigate = useNavigate();
  const selectedPostId = localStorage.getItem("selectedPostId");
  const [selectedPost, setSelectedPost] = useState(JSON.parse(localStorage.getItem("selectedPost")) || {});

  const [heartValue, setHeartValue] = useState(selectedPost.heartValue || 0);
  const [comments, setComments] = useState(selectedPost.comments || []);
  const [comment, setComment] = useState("");
  const [isCommentNonameOn, setIsCommentNonameOn] = useState(false);

  useEffect(() => {
    const storedPost = JSON.parse(localStorage.getItem(`post_${selectedPostId}`)) || {};
    setHeartValue(storedPost.heartValue || 0);
    setComments(storedPost.comments || []);
  }, [selectedPostId]);

  const handleLikeClick = () => {
    const updatedHeartValue = heartValue === 0 ? 1 : 0;
    setHeartValue(updatedHeartValue);
    setSelectedPost({
      ...selectedPost,
      heartValue: updatedHeartValue,
    });

    localStorage.setItem(
      `post_${selectedPostId}`,
      JSON.stringify({
        ...selectedPost,
        heartValue: updatedHeartValue,
      })
    );
  };

  const handleDeletePost = () => {
    // 클릭한 게시글 삭제
    localStorage.removeItem(`post_${selectedPostId}`);

    // 해당 게시글의 댓글 정보 삭제
    const communityData = JSON.parse(localStorage.getItem("communityData")) || [];

    if (selectedPostId > 0 && selectedPostId <= communityData.length) {
      const updatedCommunityData = [
        ...communityData.slice(0, selectedPostId - 1),
        ...communityData.slice(selectedPostId),
      ];

      localStorage.setItem("communityData", JSON.stringify(updatedCommunityData));
    }

    localStorage.removeItem("selectedPostId");
    navigate("/community");
  };

  const handleCommentSubmit = () => {
    const newComment = {
      user_name: isCommentNonameOn ? "익명" : "율전이",
      content: comment,
      timestamp: getCurrentTimestamp(),
      heartValue: 0,
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setComment("");
    setSelectedPost({
      ...selectedPost,
      comments: updatedComments,
    });
    localStorage.setItem(`post_${selectedPostId}`, JSON.stringify({ ...selectedPost, comments: updatedComments }));
  };

  const handleCommentLikeClick = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].heartValue = updatedComments[commentIndex].heartValue === 0 ? 1 : 0;
    setComments(updatedComments);
    setSelectedPost({
      ...selectedPost,
      comments: updatedComments,
    });
    localStorage.setItem(`post_${selectedPostId}`, JSON.stringify({ ...selectedPost, comments: updatedComments }));
  };

  const handleCommentNonameClick = () => {
    setIsCommentNonameOn(!isCommentNonameOn);

    // 댓글이 익명인 경우, 이미지 변경
    if (!isCommentNonameOn) {
      const updatedComments = comments.map((commentItem, index) => {
        // 기존에 익명으로 작성되지 않은 댓글은 그대로 유지
        if (commentItem.user_name !== "익명") {
          return commentItem;
        }

        // 새로 작성된 익명 댓글에 대해 이미지 및 유저명 변경
        return {
          ...commentItem,
          user_name: "익명",
        };
      });

      setComments(updatedComments);
      setSelectedPost({
        ...selectedPost,
        comments: updatedComments,
      });

      localStorage.setItem(`post_${selectedPostId}`, JSON.stringify({ ...selectedPost, comments: updatedComments }));
    }
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <main>
      <style>
        {`
          body {
            background-color: #EAF5E7;
          }
          .detail-container {
            margin: 10px;
            padding: 10px;
            background-color: transparant;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between; /* 수정된 부분 */
            margin-bottom: 10px;
          }
          .header img {
            width: 70px;
            height: 70px;
            margin-right: 10px;
          }
          .header div {
            display: flex;
            flex-direction: column;
          }
          .user-name {
            font-weight: bold;
          }
          .time {
            font-size: 11px;
            font-weight: bold;
            color : gray;
            width: 180px;
            margin-top: 5px;
          }
          .title {
            font-weight: bold;
            font-size: 25px;
          }
          .content {
            font-size: 16px;
            margin-top: 10px;
            // height: 220px;
          }
          .actions {
            display: flex;
            margin-top: 20px;
          }
          .actions div {
            margin-left: 10px;
            font-size : 15px;
          }
          .actions img {
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-left: 10px;
          }
          .comment-container {
            position: fixed;
            right : 12px;
            width: 350px;
            top: 670px;
            padding: 5px;
            background-color: #D9D9D9;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
          }
          
          
          .comment_noname {
            width: 70px;
            height : 50px;
            margin-right: 5px;
          }
          
          .comment-input {
            flex: 1;
            padding: 8px;
            width: 100px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            margin-right: 5px; 
          }

          .comment-input input {
            background-color : #D9D9D9;
          }
          
          .send-icon {
            width: 24px;
            height: 24px;
            cursor: pointer;
          }

          .comment-list {
            overflow-y: auto;
            max-height: 350px;
            margin : 10px;
            align-items: center;
            flex-direction: column;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .comment-list::-webkit-scrollbar {
            width: 6px;
          }
          .comment-list::-webkit-scrollbar-thumb {
            background-color: #C5E1A5;
            border-radius: 4px;
          }
          .comment-list::-webkit-scrollbar-track {
            background-color: #EAF5E7;
          }
          .comment-item {
            margin-bottom: 5px;
            padding: 10px;
            position: relative; /* 상대 위치 지정 */
          }
          
          .comment-item::after {
            content: '';
            position: absolute;
            bottom: 0; /* 아래에 배치 */
            left: 10px; /* 왼쪽 여백 적용, 여기서는 패딩값과 동일하게 설정 */
            right: 10px; /* 오른쪽 여백 적용 */
            height: 2px; /* 선의 높이 */
            background-color: gray; /* 선의 색상 */
          }
          .divider {
            width: 100%;
            border: 1px solid gray; /* 가로선 스타일 지정 */
          }
          .com-user-name {
            width : 250px;
          }
          .header2 {
            display: flex;
            align-items: center;
            justify-content: space-between; /* 수정된 부분 */
            margin-bottom: 10px;
          }
          .blackheart {
            width: 20px;
            height: 20px;
          }

          .comprofile {
            width : 50px;
            height : 50px;
          }
          .heartred {
            display: flex;
          }
          .heartred img {
            width : 15px;
            height : 15px;
            margin-right : 5px;
          }
          .heartred span {
            font-size : 12px;
          }
          
          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between; /* 수정된 부분 */
          }
          
        `}
      </style>
      <section className="h-812">
        <Title title={<img src={process.env.PUBLIC_URL + "/images/Q&A.svg"} alt="Q&A" />} />

        {/* 게시글 디테일 정보 표시 */}
        <div className="detail-container">
          {/* 상단 헤더 */}
          <div className="header">
            <img
              src={
                selectedPost.user_name === "익명"
                  ? process.env.PUBLIC_URL + "/images/성균관대학교.svg"
                  : process.env.PUBLIC_URL + "/images/율전이.svg"
              }
              alt="User Avatar"
            />
            <div>
              <div className="user-name">{selectedPost.user_name}</div>
              <div className="time">{selectedPost.timestamp}</div>
            </div>
            {/* 삭제 버튼 */}
            <img
              src={process.env.PUBLIC_URL + "/images/글삭제.svg"}
              alt="Delete Button"
              className="delete-button"
              // 삭제 버튼 클릭 시 동작 추가
              onClick={() => {
                handleDeletePost();
              }}
            />
          </div>
          {/* 본문 내용 */}
          <div className="title">{selectedPost.title}</div>
          <div className="content">{selectedPost.content}</div>
          {/* 하단 액션 버튼 */}
          <div className="actions">
            <img src={process.env.PUBLIC_URL + "/images/하트.svg"} alt="Heart Icon" onClick={handleLikeClick} />
            <div className="heart_value">{heartValue}</div>
            <img src={process.env.PUBLIC_URL + "/images/댓글.svg"} alt="Comment Icon" />
            <div className="comment_value">{comments.length}</div>
          </div>
        </div>
        <div className="divider" />
        <div className="comment-list">
          {comments.map((commentItem, index) => (
            <div key={index} className="comment-item">
              <div className="header2">
                <img
                  src={
                    commentItem.user_name === "익명"
                      ? process.env.PUBLIC_URL + "/images/성균관대학교.svg"
                      : process.env.PUBLIC_URL + "/images/율전이.svg"
                  }
                  alt="comprofile"
                  className="comprofile"
                />
                <div className="com-user-name">{commentItem.user_name}</div>
                {/* 삭제 버튼 */}
                <img
                  src={process.env.PUBLIC_URL + "/images/검정하트.svg"}
                  alt="black_heart"
                  className="blackheart"
                  onClick={() => {
                    handleCommentLikeClick(index);
                  }}
                />
              </div>
              <div className="heartred">
                <img src={process.env.PUBLIC_URL + "/images/하트.svg"} alt="Heart Icon" />
                <span>{commentItem.heartValue}</span>
              </div>
              <div className="bottom">
                <div className="com-content">{commentItem.content}</div>
                <div className="com-time">{commentItem.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        {/* 댓글 입력 부분 */}
        <div className="comment-container">
          <img
            src={
              isCommentNonameOn
                ? process.env.PUBLIC_URL + "/images/댓글익명_on.svg"
                : process.env.PUBLIC_URL + "/images/댓글익명_off.svg"
            }
            alt="Noname Icon"
            className="comment_noname"
            onClick={handleCommentNonameClick}
          />
          <div className="comment-input">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
            />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/전송.svg"}
            alt="Send Icon"
            className="send-icon"
            onClick={handleCommentSubmit}
          />
        </div>
      </section>
      <Nav page="community" />
    </main>
  );
};

export default DetailPage;
