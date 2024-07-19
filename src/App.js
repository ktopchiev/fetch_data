import { useState } from "react";
import Content from "./Content";
import Navigation from "./Navigation";
import apiRequest from "./apiRequest";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com";
  const USERS_URL = `${API_URL}/users`;
  const POSTS_URL = `${API_URL}/posts`;
  const COMMENTS_URL = `${API_URL}/comments`;

  const [list, setList] = useState([]);

  const fetchUsers = async () => {
    try {
      const itemsList = await apiRequest(USERS_URL);
      setList(itemsList);
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetchPosts = async () => {
    try {
      const itemsList = await apiRequest(POSTS_URL);
      setList(itemsList);
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetchComments = async () => {
    try {
      const itemsList = await apiRequest(COMMENTS_URL);
      setList(itemsList);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="App">
        <Navigation
          fetchUsers={fetchUsers}
          fetchPosts={fetchPosts}
          fetchComments={fetchComments}
        />
      <main>
        <Content 
          list={list}
        />
      </main>
    </div>
  );
}

export default App;
