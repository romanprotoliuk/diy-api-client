import { useState } from "react"

const CommentForm = ({ setComment, handleCreateComment }) => {
  const [tempCommment, setTempComment] = useState({})
  console.log(tempCommment)
  setComment(tempCommment)

  return (
    <div>
      <form onSubmit={handleCreateComment}>
        <label htmlFor="content">Comments:</label>
        <input
          type="text"
          id="content"
          onChange={e => setTempComment({ ...tempCommment, content: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
 ) 
}

export default CommentForm