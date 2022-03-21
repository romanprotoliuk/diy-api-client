import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Comment from "../Comment"
import CommentForm from "../CommentForm"

const Display = ({ blogs, handleDelete, setEdit, edit, setComment, handleCreateComment }) => {
  const { id } = useParams()
  
  const found = blogs.find((blog, i) => blog._id === id)
  // console.log(found)
  setEdit(found)

  return (
    <div>
    <h1>Individual Blog info</h1>
      <h3>Blog title: {found.title}</h3>
      <h5>Author name: {found.name}</h5>
      <p>content: {found.content}</p>
      <h5>Created at: {found.createdAt}</h5>
      <button onClick={() => handleDelete(found._id)}>Delete</button>
      <Link className="btn create-blog" to="/edit">Edit</Link>
      <br />
      <br />
      <br />
      <CommentForm setComment={setComment} handleCreateComment={handleCreateComment} />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
    )
}

export default Display