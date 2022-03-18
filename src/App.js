import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Index from './pages/index';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";
import Article from './pages/Article';
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route index element={<Index />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="articles" element={<Article />} />
        <Route path="articles/:articleId" element={<ArticleDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
