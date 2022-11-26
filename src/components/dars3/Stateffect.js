import React, { useState, useEffect } from "react";

const Stateffect = () => {
  // const [state, setState] = useState({
  //     title: "bu nimadr",
  //     img: "https:sa'dsaodjbasjd"
  // })

  // const {title, img} = state

  // function change(){
  //     console.log(state, title,img);
  // }
  //   const [count, setCount] = useState({
  //     title: "shuhrat",
  //     count: 15
  //   });

  //   function increment() {
  //     setCount({...count, title:"javohir"})
  //   }
  //   function decrement() {
  //     setCount(count - 1);
  //   }

//   const [word, setWord] = useState("users");
//   const [data, setData] = useState([]);

//   function changeuser() {
//     setWord("users");
//   }

//   function changepost() {
//     setWord("posts");
//   }

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${word}`)
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

  return (
    <>
      {/* <button onClick={change}>Change</button>
    <div>{title}{img}</div> */}

      {/* <button onClick={increment}>+</button>
      <span>{count.title}{count.count}</span>
      <button onClick={decrement}>-</button> */}

      {/* <button onClick={changeuser}>users</button>
      <button onClick={changepost}>posts</button>

      <h1>{word}</h1>

      <ul>
        {data.map((dat, index) => {
          return <li key={index}>{JSON.stringify(dat)}</li>;
        })}
      </ul>

      {console.log("render")} */}
    </>
  );
};

export default Stateffect;
