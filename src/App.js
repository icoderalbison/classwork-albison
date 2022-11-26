import logo from './logo.svg';
import './App.css';
// import State from './components/State';
import Mapdata from './components/dars1/Mapdata';
import Conditional from "./components/dars2/Conditional"
import Home from './components/dars2/Pages/Home';
import Blog from './components/dars2/Pages/Blog';

import {Routes, Route, Link} from "react-router-dom"

let datas = [
  {
    title: "Acer"
  },
  {
    title: "Hp"
  },
  {
    title: "Mac"
  },
  {
    title: "Dell"
  },
]


function App() {
  return (
    <div className="App">
      {/* <State /> */}
      {/* <Mapdata data={datas}  /> */}
      {/* <Conditional /> */}


    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>

    </div>
  );
}

export default App;
