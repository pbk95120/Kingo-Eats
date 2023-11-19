import React, { useState } from "react";
import Nav from "../components/Nav";
import Title from "../components/common/Title";
import { Outlet } from "react-router-dom";

export const TitleContext = React.createContext(null);

const RootMyPage = () => {
  const [title, setTitle] = useState("");
  return (
    <TitleContext.Provider value={{ setTitle }}>
      <div className="bg-backgroundgray" style={{ borderRadius: "20px" }}>
        <Title title={title} />
        <div className="w-full h-[687.5px]">
          <Outlet />
        </div>
        <Nav page="mypage" />
      </div>
    </TitleContext.Provider>
  );
};

export default RootMyPage;
