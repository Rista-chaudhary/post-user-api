import UserApi from "./UserApi";
import { useEffect } from "react";
import React from "react";
import "./App.css";

function App() {
  const [compArr, setCompArr] = React.useState([]);
  const [compArrName, setCompArrName] = React.useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postArr) => setCompArr(postArr));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userArr) => {
        const mobj = {};
        for (let i = 0; i < userArr.length; i++) {
          mobj[userArr[i].id] = userArr[i].username;
        }
        setCompArrName(mobj);
        console.log(mobj);
      });
  }, []);
  return (
    <div className="App">
      {compArr.map((postData) => {
        postData.username = compArrName[postData.userId];
        return <UserApi item={postData} />;
      })}

      <div style={{ width: "540px" }}></div>
    </div>
  );
}

export default App;
