import React from 'react';

function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <img src="Theo.jpg" alt="profile" />
            <h1>Theodorah Rikhotso</h1>
            <div className="num">
        <ul className="stats">
          <li>
            13k     <br />
            Followers &nbsp;&nbsp;|&nbsp;&nbsp;
          </li>
          <li>
            3k <br />
            Following &nbsp;&nbsp;|&nbsp;&nbsp;
          </li>
          <li>
            21+ <br />
            Projects &nbsp;&nbsp;|&nbsp;&nbsp;
          </li>
          <li></li>
        </ul>
        

      </div>
            <h3>Junior Developer</h3>
            <p>👋 Junior developer with a big heart for coding! 🌟 Turning coffee into code and dreams into digital realities. Passionate about crafting pixel-perfect websites and spreading positive tech vibes. Learning, growing, and smiling one bug fix at a time! 🚀 #CodeLover #TechEnthusiast</p>
            <div className="buttons-container">
            <button className="profile-button">Follow</button>
            <button className="profile-button">View Profile</button>
                
            </div>
    </div>
  );
}

export default UserProfileCard;