import { useEffect } from "react";
import { getAllSledData } from "./utils/sled";

function App() {
  const initialURL = "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads/10/posts?offset=11";
  
  useEffect(() => {
    const fetchSledData = async () => {
    let res = await getAllSledData(initialURL);
    console.log(res);
  };
  fetchSledData();
}, []);
  
  return <div className="App">home</div>;
}

export default App;

/*nodebrew run node src/index.js and be able to change the version of the node*/