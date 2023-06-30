import React, { useState, useEffect } from "react";
import axios from "axios";
function Test() {

  const [user, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (<div>
    <ul>
      {user.map((ele, index) => (
        <div key={index}>
          <li >{ele['username']}</li>
        </div>
      ))}
    </ul>

    Test</div>);
}

export default Test;
