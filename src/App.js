import { useEffect, useState } from "react";
import { getAllSledData } from "./utils/sled";

function App() {
  const initialURL =
    "http://railway-react-bulletin-board.herokuapp.com";
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
