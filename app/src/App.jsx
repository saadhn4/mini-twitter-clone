import React, { useState } from "react";
import pfp from "../src/assets/cat.jpg";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newTweet, setNewTweet] = useState("");
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
          <button className="btn-primary">Tweet</button>
        </div>
      </div>
    </>
  );
};

export default App;
