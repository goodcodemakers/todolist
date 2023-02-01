import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [onclik, setOnclik] = useState([]);

  const inputText = (e) => {
    setList(e.target.value);
  };
  const btnclick = () => {
    let coppy = [...onclik];
    coppy.push(list);
    setOnclik(coppy);
  };
  const textDelete = (iasd) => {
    const coppy = [...onclik];
    coppy.splice(iasd, 1);
    setOnclik(coppy);
  };
  console.log(onclik);
  return (
    <div className="container">
      <h1>To do List</h1>
      <div className="list">
        <ul>
          {onclik.map((e, i) => {
            return (
              <li>
                {e} <button onClick={() => textDelete(i)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="input">
        <input type="text" onChange={inputText} />
        <button onClick={btnclick}>전송하기</button>
      </div>
    </div>
  );
}

export default App;
