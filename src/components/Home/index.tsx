import { useState, useEffect, } from "react"
import { Link } from "react-router-dom";
import "./home.scss"
import moment from "moment"
const formatDate = (date: Date) => {
  return moment(date).format('YYYY-MM-DD')
}
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
const getTimers = (time: string) => (new Date(time)).getTime()
function Home() {
  const [info, setInfo] = useState(defaultUser);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getInfo();
    getRepos();
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
  function getRepos() {
    fetch("https://api.github.com/users/duxinyues/repos")
      .then(response => response.json())
      .then(res => {
        const data = res.sort((a: any, b: any) => (getTimers(b.pushed_at) - getTimers(a.pushed_at)))
        setRepos(data)
      })
      .catch(err => {
        console.log("err", err)
      })
  }
  return <div className="home">
    <div>
      <img src={info.avatar_url} alt="logo" />
      <h1><Link to="/components">{info.name},React组件</Link></h1>

      <div className="three">
        <div><Link to='/Three'>Three</Link></div>
      </div>
      <div className="repos">
        {
          repos.map((item: any, index) => (<div className="item" key={item.id}>
            <div className="title">{item.name}</div>
            <div className="desc"><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.description}</a></div>
            <div className="language">主要语言：{item.language}，大小：{item.size}，forks：{item.forks}，watchers：{item.watchers}</div>
            <div className="created_at">创建：{formatDate(new Date(item.created_at))}</div>
            <div className="updated_at">更新：{formatDate(new Date(item.updated_at))}</div>
            <div className="pushed_at">推送：{formatDate(new Date(item.pushed_at))}</div>
          </div>))
        }
      </div>
    </div>

  </div>;
}
export default Home 