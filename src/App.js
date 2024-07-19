import { useState } from "react";
import Content from "./Content";
import Navigation from "./Navigation";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com";
  const USERS_URL = `${API_URL}/users`;
  const POSTS_URL = `${API_URL}/posts`;
  const COMMENTS_URL = `${API_URL}/comments`;

  const [list, setList] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(USERS_URL);
      if (!response.ok) throw Error('Cannot receive data');
      const itemsList = await response.json();
      setList(itemsList);
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(POSTS_URL);
      if (!response.ok) throw Error('Cannot receive data');
      const itemsList = await response.json();
      setList(itemsList);
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetchComments = async () => {
    try {
      const response = await fetch(COMMENTS_URL);
      if (!response.ok) throw Error('Cannot receive data');
      const itemsList = await response.json();
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
      
      <Content 
        list={list}
      />
    </div>
  );
}

export default App;
