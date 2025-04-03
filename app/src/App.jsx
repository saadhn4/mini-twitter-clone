import React, { useState } from "react";
import pfp from "../src/assets/cat.jpg";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const postTweet = () => {
    const trimmed = newTweet.trim();
    if (!trimmed) {
      alert("Tweet something...");
      return;
    }
    const newPosts = [...posts];
    setPosts([...newPosts, trimmed]);
    setNewTweet("");
  };
  return (
    <>
      <div className="post-tweet-container">
        <img src={pfp} alt="profile-pic" className="profile-pic" />
        <input
          type="text"
          placeholder="Share your thoughts.."
          className="tweet-input"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <div>
          <button onClick={postTweet} className="btn-primary">
            Tweet
          </button>
        </div>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="tweet-card">
          <div className="pfp-column">
            <img src={pfp} alt="profile-pic" className="profile-pic" />
          </div>
          <div className="second-column">
            <div className="top-row">
              <p className="name">Saad</p>
              <p className="username">@saad.hn</p>
            </div>
            <div className="bottom-row">
              <p>{post}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
