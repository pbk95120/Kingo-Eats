import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Title from "../../components/common/Title";
import { TitleContext } from "..";

export default function Card() {
  const card = {
    name: "KB 국민카드",
    image: "/images/card.svg",
  };
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cardNumber, expiryMonth, expiryYear, cvc, postalCode });
  };
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const { setTitle } = useContext(TitleContext);
  setTitle("결제 카드");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[340px] bg-white p-[10px]">
        <span className="font-bold text-2xl my-2">My 카드</span>
        <div className="flex flex-col items-center">
          <img src={card.image} alt="QRCODE" className="my-2" />
          <div className="flex flex-row items-center gap-x-2">
            <span className="font-bold">{card.name}</span>
            <img src={process.env.PUBLIC_URL + "/images/edit.svg"} alt="edit" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            className="w-[327px] h-[60px] bg-green hover:shadow-md text-white font-bold rounded"
            onClick={() => handleShow()}
          >
            결제 카드 추가
          </button>
          <Modal
            show={showModal}
            onHide={handleClose}
            className="w-[50%] h-[50%]"
          >
            <Modal.Header closeButton>
              <Modal.Title>결제 카드 추가</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-6">
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    카드 번호
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="____ ____ ____ ____"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-6 flex -mx-2">
                  <div className="px-2 w-1/2">
                    <label
                      htmlFor="expiryMonth"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      만료일
                    </label>
                    <input
                      type="text"
                      id="expiryMonth"
                      value={expiryMonth}
                      onChange={(e) => setExpiryMonth(e.target.value)}
                      placeholder="MM"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="px-2 w-1/2">
                    <label
                      htmlFor="expiryYear"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    ></label>
                    <input
                      type="text"
                      id="expiryYear"
                      value={expiryYear}
                      onChange={(e) => setExpiryYear(e.target.value)}
                      placeholder="YY"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="cvc"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    보안코드(CVC/CVV)
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="___"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="postalCode"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    결제비밀번호(6자리)
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="______"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                저장하기
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
