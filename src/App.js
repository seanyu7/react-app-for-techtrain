import { useEffect, useState } from "react";
import { getAllSledData } from "./utils/sled";
import "./App.css";
import axios from "axios";

function App() {
  const initialURL =
    "https://railway-react-bulletin-board.herokuapp.com//threads?offset=5000";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSledData = async () => {
      let res = await getAllSledData(initialURL);
      //let res = await axios.get(initialURL);
      //console.log(data);
      setData(res);
    };
    fetchSledData();
  }, []);

  const [title, setTitle] = useState("");

  const createPost = () => {
    axios
      .post(initialURL, {
        title: title,
      })
      .then((res) => {
        console.log(res);
        fetchSledData();
      });
    //５０００番台のIDをイニシャルURLの後に書くと自分が入力したものが反映されているのを確認できる
    //google chromeの検証ツールのnetworkタブで確認できる
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
    </div>
  );
}

export default App;

/*nodebrew run node src/index.js and be able to change the version of the node*/
