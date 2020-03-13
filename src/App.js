import React, {useState} from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import './App.css';


function App() {

  const [quote, setQuote] = useState({"_id":"5e634ed96ecd35b0c77b6d53","text":"“I lived in books more than I lived anywhere else.”","author":"Neil Gaiman","source":"The Ocean At The End Of The Lane","__v":0});

  const [intro, setIntro] = useState({headTitle: "Hi !", headBody: "They say a man is known by the company he keeps. I am friends with a lot famous dead people. Some of them said really smart stuff. Here you can click through some of my favourite quotes from my favourite authors." });


  function newQuote() {
    fetch("https://tintin-quotes-api.herokuapp.com/quotes/random")
    .then(res => res.json())
    .then(result => {setQuote(result);});
  }


  return (
    <div className="App" >
      <div className="wrapper" onClick={() => {
          newQuote();
          setTimeout(function() {
            setIntro({});
          }, 300);
        }}>
        <Header intro={intro}/>
        <Quote quote = {quote} />
      </div>
        <Footer />
    </div>
  );
}

export default App;
