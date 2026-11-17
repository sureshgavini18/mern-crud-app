
import { useNavigate } from "react-router-dom";

const API_URL = "https://mern-crud-app-0p35.onrender.com";

function Post({ post }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/update-post/${post._id}`);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/v1/posts/${post._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully!");
      window.location.reload();

    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete post");
    }
  };

  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-content">{post.content}</div>

      <div className="post-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Post;
