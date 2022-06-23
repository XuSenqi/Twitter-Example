import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";

const Profile = () => {
  

  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src={defaultImgs[1]}></img>
      <div className="pfpContainner">
        <img className="profilePFP" src={defaultImgs[0]}></img>
        <div className="profileName">Longfei</div>
        <div className="profileWallet">
          0xd3c...v32</div>
        <div className="profileBio">
          Coding with Filecoin.
        </div>
        <Link to="/settings">
          <div className="profileEdit">Edit Profile</div>
        </Link>
        <div className="profileTabs">
          <div className="profileTab">
          Your Tweets
          </div>
        </div>

        <TweetInFeed profile={true}></TweetInFeed>  
      </div>
    </>
  );
};

export default Profile;

