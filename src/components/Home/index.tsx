import { useState, useEffect, } from "react"
import { Link } from "react-router-dom";
import "./home.scss"
const defaultUser = {
  avatar_url: "https://img.zcool.cn/community/01ade35542ed1a0000019ae9789872.jpg@1280w_1l_2o_100sh.jpg",
  bio: "",
  blog: "",
  company: null,
  created_at: "",
  email: null,
  events_url: "",
  followers: 8,
  followers_url: "",
  following: 6,
  following_url: "",
  gists_url: "",
  gravatar_id: "",
  hireable: null,
  html_url: "",
  id: 29058884,
  location: "",
  login: "",
  name: "读心悦",
  node_id: "",
  organizations_url: "",
  public_gists: 0,
  public_repos: 24,
  received_events_url: "",
  repos_url: "",
  site_admin: false,
  starred_url: "",
  subscriptions_url: "",
  twitter_username: null,
  type: "",
  url: "",
}
function Home() {
  const [info, setInfo] = useState(defaultUser);
  useEffect(() => {
    getInfo();
  }, [])
  function getInfo() {
    fetch("https://api.github.com/users/duxinyues")
      .then(response => response.json())
      .then(res => {
        setInfo(res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }

  return <div className="home">
    <div>
      <img src={info.avatar_url} alt="logo" />
      <h1><Link to="/components">{info.name}</Link></h1>
      <div className="repos">
        <Link to='/components'>
          <div className="item">
            <div className="title">React组件</div>
          </div>
        </Link>
      </div>
    </div>

  </div>;
}
export default Home 