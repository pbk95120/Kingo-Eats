import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPage from './mypage/Mypage';
import QrPage from './mypage/subpage/Qr';
import MenuListPage from './mypage/subpage/MenuList';
import CardPage from './mypage/subpage/Card';
import HistoryPage from './mypage/subpage/History';
import RootMyPage from './mypage/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
// 안돼
export default App;
