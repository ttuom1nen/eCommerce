import React from "react";
import "./MenuItem.styles.scss";

interface Props {
  title: string;
  imageUrl: string;
  size: string;
}

const MenuItem = ({ title, imageUrl, size }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url (${imageUrl})`,
      }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
