import { Link } from "react-router-dom"
import Blog from "../Blog"

const Landing = ({ blogs }) => {
  const oneblog = blogs.map((blog, i) => {
    return <Blog key={`this-key${i}`} blog={blog}/>
  })

  return (
    <div>
      <div className="landing-top-wrapper">
        <h1>All blogs</h1>
        <Link className="btn create-blog" to="/blog">Create Blog</Link>
      </div>
      {oneblog}
    </div>
    )
}

export default Landing