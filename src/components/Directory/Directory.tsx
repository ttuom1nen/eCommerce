import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";
import { StoreState, Section } from "../../models";

import { DirectoryMenuContainer } from "./Directory.styles";

const Directory = () => {
  const sections: Section[] = useSelector(
    (state: StoreState) => state.directory.sections
  );

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
