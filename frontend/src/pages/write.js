import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/common/Title';
import Nav from '../components/Nav';

const WritePage = () => {
  const navigate = useNavigate();

  // 제목과 내용을 각각의 state로 관리
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [user_name, setUserName] = useState("익명의 율전이");

  const handleCompleteButtonClick = () => {
    // "/community"로 이동하면서 데이터 전달
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    // 데이터를 localStorage에 저장
    const savedData = JSON.parse(localStorage.getItem('communityData')) || [];
    savedData.push({ title, content, user_name});
    localStorage.setItem('communityData', JSON.stringify(savedData));

    // 글 작성 후 입력창 초기화
    navigate('/community');

    setTitle('');
    setContent('');
  };


  return (
    <main>
      <style>
        {`
          body {
            background-color: #EAF5E7;
          }
          .complete-button {
            position: fixed;
            right: 10px;
            top: 675px;
            cursor: pointer;
          }
          .noname-button {
            position: fixed;
            left: 10px;
            top: 675px;
            cursor: pointer;
          }
          .input-container {
            color: black;
            margin: 20px;
          }
          .input-title{
            width: 100%;
            font-weight: bold;
            padding-left: 10px;
            box-sizing: border-box;
            background-color: transparent; /* 배경색을 투명하게 설정 */
            border: none; /* 테두리 제거 */
            outline: none; /* 포커스 효과 제거 */
            resize: none; /* 크기 조절 제거 (textarea에만 적용) */
            font-size: 25px;
            color: #000; /* 글자 색상 지정 */
          }
          .input-title::placeholder {
            font-weight: bold;
            color : Black;
          }
          .input-content {
            width: 100%;
            padding-left: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            background-color: transparent; /* 배경색을 투명하게 설정 */
            border: none; /* 테두리 제거 */
            outline: none; /* 포커스 효과 제거 */
            resize: none; /* 크기 조절 제거 (textarea에만 적용) */
            font-size: 17px;
            height: 200px; /* 높이 조절 */
            color: #000; /* 글자 색상 지정 */
          }
          .input-content::placeholder {
            font-weight: bold;
            color: gray;
          }
          .divider {
            width: 100%;
            border: 1px solid gray; /* 가로선 스타일 지정 */
          }
          .SKKU {
            position: fixed;
            mix-blend-mode: multiply;
            right: 80px;
            top: 400px;
          }
        `}
      </style>
      <section className="h-812">
        <Title title={<img src={process.env.PUBLIC_URL + '/images/Q&A.svg'} alt="Q&A" />} />

        {/* 제목 입력란 */}
        <div className="input-container">
          <input
            type="text"
            className="input-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
          />
        </div>

        <div className="divider" />

        {/* 내용 입력란 */}
        <div className="input-container">
          <textarea
            className="input-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/성균관대학교.svg'}
          alt="SKKU"
          className="SKKU"
        />

        {/* 버튼들 */}
        <img
          src={process.env.PUBLIC_URL + '/images/완료.svg'}
          alt="complete Button"
          className="complete-button"
          onClick={() => {
            // "/community"로 이동
            handleCompleteButtonClick();
          }}
        />

        <img
          src={process.env.PUBLIC_URL + '/images/익명.svg'}
          alt="noname Button"
          className="noname-button"
          onClick={() => {
            // 익명기능 활성화.
            alert('익명 기능이 활성화되었습니다.');
            setUserName("익명");
          }}
        />
      </section>
      <Nav />
    </main>
  );
};

export default WritePage;
