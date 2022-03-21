import { Link } from "react-router-dom"

const Blog = ({ blog }) => {
  return (
    <div className="blog-wrapper">
      <Link to={`/blog/${blog._id}`}>
        <h3>Blog title: {blog.title}</h3>
      </Link>
      <h5>Author name: {blog.name}</h5>
      <h5>Created at: {blog.createdAt}</h5>
    </div>
    )
}

export default Blog