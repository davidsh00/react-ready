import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import "./transition.css";

function App() {
  const Item = ({ item }) => {
    return <div onClick={deleteHandle}>{item}</div>;
  };
  const [inProp, setInProp] = useState(false);
  const deleteHandle = (e) => {
    setInProp(false);
    setData(data.filter((item) => item != e.target.innerText));
  };
  const [data, setData] = useState(["ali", "hasan", "majid"]);
  return (
    <div className="App">
      <TransitionGroup>
        {data.map((item, i) => (
          <CSSTransition
            exit={true}
            appear={true}
            enter={true}
            timeout={6000}
            classNames="fade"
            in={inProp}
            key={i}
          >
            <Item item={item} />
          </CSSTransition>
        ))}

        <div>
          <button
            onClick={() => {
              setData([...data, `new${new Date().getMilliseconds()}`]);
              setInProp(true);
            }}
            className="bg-slate-600 p-4 fixed top-8 text-white left-8"
          >
            Add
          </button>
        </div>
      </TransitionGroup>
    </div>
  );
}
export default App;
