import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

interface Props extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}: Props) => {
  return (
    <MenuItemContainer
      size={size ?? ""}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default React.memo(withRouter(MenuItem));
