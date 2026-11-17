
import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";

const API_URL = "https://mern-crud-app-0p35.onrender.com/api/v1/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(API_URL);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch posts");
        }

        setPosts(data.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Unable to load posts: " + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <div className="posts-container">
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <Post key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
