import {useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {

    const {id} = useParams()
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) =>{
        event.preventDefault();

        await supabase //call to the supabase client
            .from('Posts') // the table we want to use from the database
            .update({ title: post.title, author: post.author,  description: post.description}) 
            // we pass a JSON to .update() with the title, post and description from the data from the post
            .eq('id', id); //"equivalent" - this will ensure that the row with the matching id of the current post is updated in the database
        
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost