import { useEffect, useState } from "react";
import { getAllSledData } from "./utils/sled";
import "./App.css";
import Post from "./components/Post";

function App() {
  const fetchSledData = async () => {
    let res = await getAllSledData(initialURL);
    console.log(res);
    setData(res);
  };

  const initialURL =
    "https://railway-react-bulletin-board.herokuapp.com/threads";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSledData();
  }, []);

  return (
    <div className="App">
      <>
        <div className="cardContainer">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="card" key={item.id}>
                <li>{item.title}</li>
              </div>
            ))
          ) : (
            <h1>Loading now...</h1>
          )}
        </div>
      </>
      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;

/*nodebrew run node src/index.js and be able to change the version of the node*/
