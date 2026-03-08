import React from "react";
import Maruee from "./Maruee";

function Maruees() {
  const images = [
    [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

      "https://cdn.simpleicons.org/google",
      "https://cdn.simpleicons.org/apple",
      "https://cdn.simpleicons.org/netflix",
      "https://cdn.simpleicons.org/spotify",
      "https://cdn.simpleicons.org/tesla",
      "https://cdn.simpleicons.org/uber",
      "https://cdn.simpleicons.org/airbnb",
      "https://cdn.simpleicons.org/slack",
      "https://cdn.simpleicons.org/paypal",
      "https://cdn.simpleicons.org/amazon"
    ],
    [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

      "https://cdn.simpleicons.org/facebook",
      "https://cdn.simpleicons.org/instagram",
      "https://cdn.simpleicons.org/linkedin",
      "https://cdn.simpleicons.org/youtube",
      "https://cdn.simpleicons.org/twitter",
      "https://cdn.simpleicons.org/discord",
      "https://cdn.simpleicons.org/notion",
      "https://cdn.simpleicons.org/dropbox",
      "https://cdn.simpleicons.org/samsung",
      "https://cdn.simpleicons.org/intel"
    ]
  ];

  return (
    <div className="w-full">
      {images.map((item, index) => (
        <Maruee key={index} imagesurl={item} />
        
      ))}
    </div>
  );
}

export default Maruees;