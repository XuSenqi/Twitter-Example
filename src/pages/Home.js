import React from "react";
import "./Home.css";
import { useState, useRef} from "react";
import { defaultImgs } from "../defaultimgs";
import {TextArea, Icon} from "web3uikit";
import TweetInFeed from "../components/TweetInFeed";

const Home = () => {
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [theFile, setTheFile] = useState();
  const [tweet, setTweet] = useState();

  const onImageClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  async function saveTweet() {

  }

  async function maticTweet() {
    
  }

  return (
    <>
    <div className="pageIdentify">Home</div>
      <div className="mainContent">
        <div className="profileTweet">
          <img 
            src={defaultImgs[0]} className="profilePic" >
          </img>

          <div className="tweetBox">
            <TextArea
              label=""
              placeholder="Type here field"
              name="tweetTextArea"
              onBlur={function noRefCheck(){}}
              type="text"
              width="95%"
              onChange={(e) => setTweet(e.target.value)}>
            </TextArea>
            {selectedFile && (
              <img src={selectedFile} className="tweetImg"></img>
            )}

            <div className="imgOrTweet">
              <div className="imgDiv" onClick={onImageClick}>
                <input
                    type="file"
                    name="file"
                    ref={inputFile}
                    onChange={changeHandler}
                    style={{ display: "none"}}
                  />
                  <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
              </div>

              <div className="tweetOptions">
                <div className="tweet" onClick={saveTweet}>Tweet</div>
                  <div className="tweet" onClick={maticTweet} style={{ backgroundColor: "#8247e5" }}>
                    <Icon fill="#ffffff" size={20} svg="matic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TweetInFeed profile={false}/>
      </div>
    </>
  );
};

export default Home;
