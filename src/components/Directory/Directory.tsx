import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";
import { StoreState, Section } from "../../models";
import "./Directory.styles.scss";

const Directory = () => {
  const sections: Section[] = useSelector(
    (state: StoreState) => state.directory.sections
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
