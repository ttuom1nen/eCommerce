import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";
import { StoreState } from "../../models";
import "./Directory.styles.scss";

const Directory = () => {
  const sections = useSelector((state: StoreState) => state.directory);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
