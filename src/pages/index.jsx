
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="container">
      <h1 className="h2">毫無反應，只是個普通的首頁。</h1>
      <div className="row mt-3">
        <p>請選擇要前往的頁面 :</p>
        <div className="col-md-3">
          <Link to="/products" className="btn btn-sm btn-neutral w-100 p-3">產品列表</Link>
        </div>
        <div className="col-md-3">
          <Link to="/articles" className="btn btn-sm btn-neutral w-100 p-3">文章列表</Link>
        </div>
      </div>
    </div>
  )
}

export default Index;