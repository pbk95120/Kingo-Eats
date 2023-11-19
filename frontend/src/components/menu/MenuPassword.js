import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuPassword = () => {
  const [password, setPassword] = useState(Array(6).fill(false));
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isNumberKey = /^[1-9]$/.test(event.key);
      const isEnterKey = event.key === "Enter";
      const isBackspaceKey = event.key === "Backspace";

      if (isNumberKey) {
        const emptyIndex = password.findIndex((value) => !value);

        if (emptyIndex !== -1) {
          const newPassword = [...password];
          newPassword[emptyIndex] = true;
          setPassword(newPassword);
        }
      } else if (isEnterKey) {
        if (password.length === 6) {
          navigate("/menu/qr");
        }
      } else if (isBackspaceKey) {
        const lastFilledIndex = password.lastIndexOf(true);

        if (lastFilledIndex !== -1) {
          const newPassword = [...password];
          newPassword[lastFilledIndex] = false;
          setPassword(newPassword);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [password]);

  return (
    <section>
      <div className="w-11/12 h-148 bg-white rounded mx-auto mt-12">
        <div className="flex flex-column justify-center items-center">
          <p className="text-lg text-textdark m-0 pt-20">결제 비밀번호 입력</p>
          <div className="flex gap-3">
            {password.map((value, index) =>
              value ? (
                <img
                  key={index}
                  src={process.env.PUBLIC_URL + "/images/password_on.svg"}
                  className="object-cover pt-20"
                />
              ) : (
                <img key={index} src={process.env.PUBLIC_URL + "/images/password.svg"} className="object-cover pt-20" />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPassword;
