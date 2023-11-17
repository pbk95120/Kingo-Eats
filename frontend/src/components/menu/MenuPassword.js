import { useState } from "react";

const MenuPassword = () => {
  const [password, setPassword] = useState(Array(6).fill(false));

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
