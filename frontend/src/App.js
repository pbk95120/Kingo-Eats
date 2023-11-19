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
import MenuPaymentPage from "./pages/MenuPaymentPage";
import MenuPasswordPage from "./pages/MenuPasswordPage";
import MenuQrPage from "./pages/MenuQrPage";
import CommunityPage from "./pages/community";
import WritePage from "./pages/write";
import DetailPage from "./pages/detailwrite";
import ReviewPage from "./mypage/subpage/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<MenuDetailPage />} />
        <Route path="/menu/:id/payment" element={<MenuPaymentPage />} />
        <Route path="/menu/:id/password" element={<MenuPasswordPage />} />
        <Route path="/menu/qr" element={<MenuQrPage />} />
        <Route path="/recommand" element={<RecommandPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="mypage" element={<RootMyPage />}>
          <Route index element={<MyPage />} />
          <Route path="qr" element={<QrPage />} />
          <Route path="menulist" element={<MenuListPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="review" element={<ReviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
