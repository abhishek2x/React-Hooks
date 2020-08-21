import React, { useState, useEffect } from "react";
import Axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtomClick, setIdFromButtomClick] = useState(1);

  const handleClick = () => {
    setIdFromButtomClick(id);
  };

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtomClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <button type="buttton" onClick={handleClick}>
        Fetch Post
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      {post.title}
    </div>
  );
}

export default DataFetching;
