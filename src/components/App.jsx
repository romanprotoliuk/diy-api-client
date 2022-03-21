import '../App.css'

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Landing from './pages/Landing';
import Display from './pages/Display';
import Header from './layout/Header';
import CreateBlogForm from './CreateBlogForm';
import EditBlogForm from './EditBlogForm'

import { useNavigate } from 'react-router-dom';

const App = () => {

	const [blogs, setBlogs] = useState([])
	const [blogForm, setBlogForm] = useState(blogs)
	const [edit, setEdit] = useState({})
	const [comment, setComment] = useState({})


	let navigate = useNavigate()

	useEffect(async() => {
		try {
			const blogsData = await	axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
			// console.log(blogsData.data)
			setBlogs(blogsData.data)
		} catch (error) {
			console.log(error)
		}
		// clean up?????
	}, [blogs])
	

	const handleSubmit = async (e) => {
		e.preventDefault()
		const posted = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, blogForm)
		if (posted) {
			navigate("/", {replace: true})
		}
	}

	const handleDelete = async (number) => {
		console.log(number, ' will be deleted')
		const deleted = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${number}`)
		if (deleted) {
			navigate("/", {replace: true})
		}
	}

	const handleEdit = async (e) => {
		e.preventDefault()
		console.log({name: edit.name, title: edit.title, content: edit.content})
		const edited = await axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${edit._id}`, {name: edit.name, title: edit.title, content: edit.content})
		if (edited) {
			navigate("/", {replace: true})
		}
	}

	const handleCreateComment = async (e) => {
		e.preventDefault()
		const commentSubmitted = await axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${edit._id}/comment`, { content: comment.content })
		
	}

	return (
		<div className="App">
			<main>
				<h1>App Component</h1>
				<Header />
				<Routes>
					<Route exact path='/' element={<Landing blogs={blogs} />} />
					<Route exact path='/blog' element={<CreateBlogForm blogForm={blogForm} setBlogForm={setBlogForm} handleSubmit={handleSubmit} />} />
					<Route exact path='/edit' element={<EditBlogForm blogForm={blogForm} setBlogForm={setBlogForm} handleEdit={handleEdit} setEdit={setEdit} edit={edit}/>} />
					<Route exact path='/blog/:id' element={<Display blogs={blogs} handleDelete={handleDelete} setBlogForm={setBlogForm} setEdit={setEdit} edit={edit} setComment={setComment}/>} />
				</Routes>
			</main>
		</div>
	)
}

export default App;
