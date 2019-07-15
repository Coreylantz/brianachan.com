import React from "react";

import InstagramIcon from "./icon-instagram";
import LinkedinIcon from "./icon-linkedin";
import TwitterIcon from "./icon-twitter";

import SocialStyles from "./social-icons.module.css";

const SocialIcons = () => {
  return (
    <div className={SocialStyles.iconContainer}>
      <a href="https://twitter.com/eightbreeze" className={[SocialStyles.hexagon, SocialStyles.teal].join(' ')} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
      <a href="https://twitter.com/eightbreeze" className={[SocialStyles.hexagon, SocialStyles.pink].join(' ')} target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
      <a href="https://twitter.com/eightbreeze" className={[SocialStyles.hexagon, SocialStyles.yellow].join(' ')} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
    </div>
  )
}

export default SocialIcons;