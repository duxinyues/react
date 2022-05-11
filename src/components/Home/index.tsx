import { Link } from "react-router-dom";
import "./home.scss"
function Home() {
  return <div className="home">

    <div>
      <h1><Link to="/admin">读心悦，React组件库</Link></h1>
    
    </div>

  </div>;
}
export default Home 