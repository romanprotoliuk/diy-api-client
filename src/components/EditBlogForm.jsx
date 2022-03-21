// import { useState } from "react"

const CreateBlogForm = ({ blogForm, setBlogForm, setEdit, handleEdit, edit }) => {
  // const [editState, setEditState] = useState({})
  setBlogForm(edit)
  // console.log('blog form: ', edit._id)
  return (
    <div>
    <h1>Edit Blog Form</h1>
      <form onSubmit={handleEdit}>
        <div className="form">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={edit.title}
            onChange={e => setEdit({ ...edit, title: e.target.value})}
          />
        
          <label htmlFor="name">Author:</label>
          <input
            type="text"
            id="name"
            value={edit.name}
            onChange={e => setEdit({ ...edit, name: e.target.value})}
          />
        
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={edit.content}
            onChange={e => setEdit({ ...edit, content: e.target.value})}
            
          />

          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default CreateBlogForm