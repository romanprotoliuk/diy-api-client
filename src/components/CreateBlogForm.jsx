const CreateBlogForm = ({ blogForm, setBlogForm, handleSubmit }) => {
  return (
    <div>
    <h1>Create Blog Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={e => setBlogForm({ ...blogForm, title: e.target.value})}
          />
        
          <label htmlFor="name">Author:</label>
          <input
            type="text"
            id="name"
            onChange={e => setBlogForm({ ...blogForm, name: e.target.value })}
          />
        
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
          />

          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default CreateBlogForm