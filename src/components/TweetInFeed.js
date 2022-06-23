import React from "react";
import "./TweetInFeed.css";
import filecoinOrbit from "../images/filecoinOrbit.jpeg";
import canoe from "../images/canoe.jpeg";
import { defaultImgs } from "../defaultimgs";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";
import { Icon } from "web3uikit";
const TweetInFeed = () => {
  
  return (
    <>
    <div className="feedTweet">
        <img src={pfp5} className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            Filecoin
            <div className="accWhen">0x42..314 · 1h</div>
          </div>
          <div className="tweetContent">
            Excited about the Filecoin Orbit swag!
            <img src={filecoinOrbit} className="tweetImg"></img>
          </div>
          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star" />
              12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic" />
            </div>
          </div>
        </div>
      </div>
      <div className="feedTweet">
        <img src={pfp4} className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            IPFS
            <div className="accWhen">0x42..314 · 1h</div>
          </div>
          <div className="tweetContent">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially un
          </div>
          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star" />
              12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="feedTweet">
        <img src={pfp5} className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            Filecoin
            <div className="accWhen">0x42..314 · 1h</div>
          </div>
          <div className="tweetContent">
            Thoughts on the new Coca-Cola banana 🥤🍌 flavor?
          </div>
          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star" />
              12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic" />
            </div>
          </div>
        </div>
      </div>
      <div className="feedTweet">
        <img src={defaultImgs[0]} className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            Juhizzz
            <div className="accWhen">0x42..314 · 1h</div>
          </div>
          <div className="tweetContent">
            Love spending time on the water 🌊🌅
            <img src={canoe} className="tweetImg"></img>
          </div>
          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star" />
              12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetInFeed;

