import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Post from '../component/Post';

const Category = () => {
      const [posts, setPosts] = React.useState([]);
      const [category, setCategory] = React.useState({});

      const { id } = useParams();

      const fetchPosts = async () => {
            const response = await axios.get(`http://localhost:4000/api/posts/category/${id}`)
            setPosts(response.data);
        }
    
          const fetchCategory = async () => {
            const response = await axios.get(`http://localhost:4000/api/categories/${id}`)
            setCategory(response.data);
        }
    
    
        useEffect(() => {
            fetchPosts();
                fetchCategory();
        }, [])
    
        if (!category) {
            return <p>Loading...</p>
        }
  return (
      <main>
      <div class="container mt-4">
          <div class="row">
              <div class="col-lg-8">
                  <h1 class="mb-4">{category.name}</h1>

                  {
                   posts.map((post) => <Post post={post} />)
                  }
               

              </div>

             
          </div>
      </div>
  </main>
  )
}

export default Category