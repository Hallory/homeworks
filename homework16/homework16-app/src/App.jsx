import { useState } from 'react';
import './App.css';
import MyInput from './UI/Input/MyInput';
import Post from './post/Post';

function App() {
  const ANAKIN_IMAGE = 'https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg'
  const RAY_IMAGE = 'https://www.slashfilm.com/img/gallery/can-the-return-of-rey-redeem-the-sins-of-star-wars-the-rise-of-skywalker/intro-1680978833.webp'
  const [author, setAuthor] = useState([
    {
      name: "Anakin skywalker",
      //photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
      //content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
      //image:RAY_IMAGE,
      //date: "26 лют."
      },
      
    
])
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  const addPost = (e)=>{
    e.preventDefault()
    const newPost = {
      name,
      nickname,
      photo: ANAKIN_IMAGE
    }
    setAuthor([...author, newPost])
  }

  return (
    <div className="App">
      <div className="name__container">
        <form >
          <MyInput onChange = {e => setName(e.target.value)} type="text" placeholder = 'name'/>
        <MyInput onChange = {e => setNickName(e.target.value)} type = "text" placeholder = 'nickName'/>
        <button onClick={addPost} >add</button>
        </form>
        
      </div>
      {author.map((author)=>
        <Post author={author} key={author}/>
      )}
      
      
      
    </div>
  );
}

export default App;
