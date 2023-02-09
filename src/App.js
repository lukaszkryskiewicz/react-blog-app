import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import EditPost from "./components/pages/EditPost/EditPost";
import AddPost from "./components/pages/AddPost/AddPost";
import Post from "./components/pages/Post/Post";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";
import Categories from "./components/features/Categories/Categories";
import Category from "./components/pages/Category/Category";


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
