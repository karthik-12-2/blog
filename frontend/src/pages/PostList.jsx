import React, { useEffect } from "react";
import Post from "../component/Post";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/posts");
      setPosts(response.data);
    } catch (error) {
    console.error(error)
    }
  }
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/categories");
      setCategories(response.data);
    } catch (error) {
    console.error(error)
    }
  }

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  },[])

  return (
    <>

      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4">Latest Posts</h1>
              {
                posts.length > 0 ? posts.map((post) => (<Post key={post._id} post={post} />)) : 'No Posts Available'
              }
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">About Me</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-group">
                   {categories.length > 0 ? categories.map((category) => <li className="list-group-item"> <Link to={`/posts/category/${category._id}`} className="text-black">{category.name}</Link></li>) : 'No Categories Available'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </>
  );
};

export default PostList;
