
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://mern-crud-app-0p35.onrender.com/api/v1/posts";

function AddEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        try {
          const response = await fetch(`${API_URL}/${id}`);
          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.message || "Failed to fetch post");
          }

          setTitle(result.data.title);
          setContent(result.data.content);
        } catch (error) {
          console.error("Error fetching post:", error);
          alert(error.message);
        }
      }

      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = id ? "PUT" : "POST";
    const url = id ? `${API_URL}/${id}` : API_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save post");
      }

      alert(
        id
          ? "Post updated successfully!"
          : "Post created successfully!"
      );

      navigate("/");
    } catch (error) {
      console.error("Error saving post:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div>{id ? "Edit Form" : "Add Form"}</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <br />

        <button type="submit">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default AddEditForm;
