import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const PostDetail = () => {
      const [post, setPost] = React.useState(null);
const {id} = useParams();

      const fetchPosts = async () => {
            try {
                  const response = await axios.get(`http://localhost:4000/api/posts/${id}`);
                  setPost(response.data);
            } catch (error) {
                  console.error(error);
            }
      }

      React.useEffect(() => {
            fetchPosts(); 
      }, [])

      
      if(!post) {
            return <div className="container my-4">Loading...</div>
      }
      
      const formattedDate = Intl.DateTimeFormat('en-US', {
            month: 'long',
            year: 'numeric',
            day: 'numeric'
      }).format(new Date(post.createdAt))

  return (
      <main className="container my-4">
      <div className="row">
          <article className="col-lg-8">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>

              <img className="mb-3 img-fluid" src="https://via.placeholder.com/300" alt=""/>
              <div className="blog-post-content">
                  <p>{post.content}</p>
              </div>
          </article>
      </div>
  </main>
  )
}

export default PostDetail