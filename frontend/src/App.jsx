import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import Category from "./pages/Category.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import PostList from "./pages/PostList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/category/:id" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
