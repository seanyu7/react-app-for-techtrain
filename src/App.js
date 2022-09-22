import { useEffect, useState } from "react";
import { getAllSledData } from "./utils/sled";
import "./App.css";
import axios from "axios";

function App() {
  const fetchSledData = async () => {
    let res = await getAllSledData(initialURL);
    //console.log(res);
    //setData(res);
  };

  const initialURL =
    "https://railway-react-bulletin-board.herokuapp.com/threads";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSledData();
  }, []);

  const [title, setTitle] = useState("");

  const createPost = () => {
    axios.post(`https://railway-react-bulletin-board.herokuapp.com/threads`, {
      title
    });
  };

  

  return (
    <div className="App">
      <div className="post">
        <div className="postContainer">
          <h1>Creating a new title</h1>
          <div className="inputPost">
            <div>Title</div>
            <input
              type="text"
              placeholder="Put in your title here"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="postButton" onClick={createPost}>
              click
            </button>
          </div>
        </div>
      </div>
      <>
        <div className="cardContainer">
          {data.length > 0 ? (
            (console.log(data),
            data.map((item) => (
              <div className="card" key={item.id}>
                <li>{item.title}</li>
              </div>
            )))
          ) : (
            <h1>Loading now...</h1>
          )}
        </div>
      </>
    </div>
  );
}

export default App;

/*nodebrew run node src/index.js and be able to change the version of the node*/
