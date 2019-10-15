import React from 'react';
import './App.css';
import { directive } from '@babel/types';

let post = [
  {
    date: 'Jan. 30, 2018',
    author: 'By KEVIN ROOSE', 
    shortText: 'THE SHIFT',
    title: "Kodak's Dubious Blockchain Gamble",
    content: "What's a 130-year-old photo company doing dabbling in cryptocurrenty? Either revolutionizing digital rights management or trying to make a quick buck.",
    image: 'http://hdwpro.com/wp-content/uploads/2016/12/Awesome-HD-Pic.jpg',
  }, {
    date: 'Jan. 30, 2018',
    author: 'By CHRIS HORTON', 
    title: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar Year Travel",
    content: "Taiwan, pushing back over enchroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
    image: 'https://cdn.wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
  }, {
    date: 'Jan. 29, 2018',
    author: 'By BRAD PLUMER', 
    title: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
    content: "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
    image: 'http://shoppopgallery.com/wp-content/uploads/2019/06/wallpapers-light-hd-and-desktop-backgrounds-hd-photo-outstanding-image-pretty-0.jpg',
  }
]

function App() {
  return (
    <div>
      <Article date={post[0].date} author={post[0].author} title={post[0].title} content={post[0].content} image={post[0].image} shortText={post[0].shortText}/>
      <Article date={post[1].date} author={post[1].author} title={post[1].title} content={post[1].content} image={post[1].image}/>
      <Article date={post[2].date} author={post[2].author} title={post[2].title} content={post[2].content} image={post[2].image}/>
    </div>
  );
}

function Article(props) {
  
  return(
    <div className="container">
      <div className="date">
        <p>{props.date}</p>
      </div>

      <div className="main">
        <div className="shortText">
          <header> {props.shortText} </header>
        </div>
        <div className="title">
          <header> {props.title} </header>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="author">
        <p>{props.author}</p>
        </div>
      </div>

      <div className="image">
        <img id="img" src={props.image} />
      </div>
    </div>
  )
}

export default App;
