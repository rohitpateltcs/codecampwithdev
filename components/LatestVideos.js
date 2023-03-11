import React from "react";

const LatestVideos = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default LatestVideos;
