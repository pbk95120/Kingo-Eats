import React, { useContext, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { TitleContext } from "..";

export default function Card() {
  const cardContainerRef = useRef(null);
  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 340;
    }
  };
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 340;
    }
  };
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddCardClick = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const cardNumberChunks = value.match(/.{1,4}/g) || [];
    const formattedCardNumber = cardNumberChunks.join(" ");
    setCardNumber(formattedCardNumber);
  };

  const cards = [
    {
      name: "KB 국민",
      image: "/images/card.svg",
    },
    {
      name: "신한",
      image: "/images/신한카드.png",
    },
  ];

  const { setTitle } = useContext(TitleContext);
  setTitle("결제 카드");

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-[340px] bg-white p-[10px]">
          <span className="font-bold text-2xl my-2">My 카드</span>
          <div className="flex flex-col items-center">
            <div
              className="flex flex-row items-center gap-x-2 overflow-x-auto"
              ref={cardContainerRef}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-full py-3"
                >
                  <img
                    src={card.image}
                    alt="Card"
                    className="my-2 w-[283px] h-[178px]"
                  />
                  <div className="flex flex-row items-center">
                    <span className="font-bold">{card.name}</span>
                    <img
                      src={process.env.PUBLIC_URL + "/images/edit.svg"}
                      alt="Edit"
                      className="ml-1"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-between w-1/4 mt-3">
              <FaAngleLeft
                size={24}
                onClick={() => scrollLeft()}
                style={{ cursor: "pointer" }}
              />
              <FaAngleRight
                size={24}
                onClick={() => scrollRight()}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 max-w-md mt-3"
            >
              <label>
                카드 번호:
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength="19" // 16자리 숫자 + 3개의 공백
                  placeholder="카드 번호 입력"
                  className="form-input ml-3"
                />
              </label>
              <label>
                유효 기간:
                <input
                  type="text"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  maxLength="2"
                  placeholder="MM"
                  className="form-input w-1/6 ml-3"
                />
                <input
                  type="text"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  maxLength="2"
                  placeholder="YY"
                  className="form-input w-1/6 ml-1"
                />
              </label>
              <label>
                CVC:
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  maxLength="3"
                  placeholder="CVC"
                  className="form-input ml-3"
                />
              </label>
              <label>
                간편결제번호:
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength="6"
                  placeholder="간편결제번호"
                  className="form-input ml-3"
                />
              </label>
            </form>
          )}
          <div className="absolute bottom-[70px] left-0 right-0 flex justify-center w-full py-4 bg-white">
            <button
              className="w-[327px] h-[60px] bg-green hover:shadow-md text-white font-bold rounded"
              onClick={() => handleAddCardClick()}
            >
              {showForm ? "카드 저장" : "카드 추가"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
