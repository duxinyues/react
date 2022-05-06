import { useState, useEffect } from "react";
import { Image } from "antd";
import "./duxinyues.scss";


const defaultUser = {
  avatar_url: "",
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
  name: "",
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
export default function Duxinyue() {
  const [user, setUser] = useState(defaultUser)
  useEffect(() => {
    fetch("https://api.github.com/users/duxinyues")
      .then(response => response.json())
      .then(res => {
        setUser(res)
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }, [])
  return <div className="duxin">
    <div className="info">
      <Image
        width={150}
        src={user?.avatar_url}
      />
      <h2>{user?.name}</h2>
    </div>

  </div>
}