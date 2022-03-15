import Header from "../../components/Header/header"
import Posts from "../../components/Posts/posts"
import Sidebar from "../../components/sidebar/sidebar"
import "./Home.css"

export default function Home() {
  return (
    <>
    
        <Header/>
        <div className="home">
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}
