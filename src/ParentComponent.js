import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setPosts(res.data));
  }, []);

  // async function getData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=10"
  //   );
  //   const result = await response.json();
  //   console.log(result);
  //   setPosts(result);
  // }
  return (
    <div>
      <ChildComponent posts={posts} />
    </div>
  );
};

export default ParentComponent;
