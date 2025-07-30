import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ReadPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // read all the posts from table
        const fetchPosts = async () => { 
            const {data} = await supabase //calling the supabase client
                .from('Posts')  // the table we want to use from the database
                .select() // returns all the database entries once they have been inserted into the database
                .order('created_at', { ascending: true }) // orders the fetched database entries by given columns

            // set state of posts
            setPosts(data) // update posts by passing the entries stored in data to setPosts()
        };
        fetchPosts();
    },[]);

    //STOPPED at step 6
    
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts