import { useEffect, useState } from "react";
import { getAllSledData } from "./utils/sled";

function App() {
  const initialURL =
    "https://railway-react-bulletin-board.herokuapp.com";
    //this URL cannot activate and cannnot get the info from here.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSledData = async () => {
      let res = await getAllSledData(initialURL);
      console.log(res.posts);
      setLoading(false);
    };
    fetchSledData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>loading now...</h1>
        //asyncにて非同期処理した処理が正常に完了するまではこのLoading now という文字が表示される。終わり次第下記内容のコードが走りsuccessfully loadedと表示される。le
      ) : (
        <>
          <h1>Successfully downloaded</h1>
        </>
      )}
    </div>
  );
}

export default App;

/*nodebrew run node src/index.js and be able to change the version of the node*/
