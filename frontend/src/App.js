import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyPage from "./mypage/Mypage";
import QrPage from "./mypage/subpage/Qr";
import MenuListPage from "./mypage/subpage/MenuList";
import CardPage from "./mypage/subpage/Card";
import HistoryPage from "./mypage/subpage/History";
import RootMyPage from "./mypage/index";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import RecommandPage from "./pages/RecommandPage";
import MenuPage from "./pages/MenuPage";
import MenuDetailPage from "./pages/MenuDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<MenuDetailPage />} />

        <Route path="/recommand" element={<RecommandPage />} />
        <Route path="mypage" element={<RootMyPage />}>
          <Route index element={<MyPage />} />
          <Route path="qr" element={<QrPage />} />
          <Route path="menulist" element={<MenuListPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
