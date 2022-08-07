import { useEffect } from "react";
import { useState } from "react";
import "./toolkit.css";

const Toolkit = (props) => {
  const [toolkitList, setToolkitList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/toolkit")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((toolkit) => setToolkitList(toolkit));
  }, []);
  return (
    <div>
      <h2>{props.heading}</h2>
      <ul>
        {toolkitList.map((tool) => {
          return (
            <li key={tool.id}>
              <i className={tool.icon}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Toolkit;
