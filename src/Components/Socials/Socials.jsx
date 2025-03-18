import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const socialIcons = [
  {
    Component: AiOutlineGithub,
    color: "#4078c0",
    link: "https://github.com/Devsamele04",
  },
  {
    Component: AiFillTwitterCircle,
    color: "#26a7de",
    link: "https://twitter.com/Dev_samele",
  },
  {
    Component: AiFillLinkedin,
    color: "#0072b1",
    link: "https://linkedin.com/in/dev-samele-838544285",
  },
  // {
  //   Component: SiLeetcode,
  //   color: "#f79c16",
  //   link: "https://leetcode.com/u/devpalwar/",
  // },
];

const Socials = () => {
  return (
    <div className="icons">
      {socialIcons.map(({ Component, color, link }, index) => (
        <a href={link} target="_blank" rel="noreferrer" key={index}>
          <Component style={{ color }} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
