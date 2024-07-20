import { useEffect, useState } from "react";
import List from "./List";
import Navigation from "./Navigation";

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [list, setList] = useState([]);
  const [source, setSource] = useState('users');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (src) => {
      try {
        const reqUrl = `${API_URL}${src}`;
        const response = await fetch(reqUrl);
        if (!response.ok) throw Error('Cannot receive data');
        const itemsList = await response.json();
        setList(itemsList);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(source);
  }, [source])

  return (
    <div className="App">
      <Navigation
        source={source}
        setSource={setSource}
      />
      <main>
        {fetchError && <p style={{ color: 'red' }}> {fetchError} </p>}
        {isLoading && <p> Data is loading... </p>}
        {!fetchError && !isLoading &&
          <List
            list={list}
            source={source}
          />
        }
      </main>
    </div>
  );
}

export default App;
