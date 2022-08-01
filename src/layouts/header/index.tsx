import React from "react";
import { HeaderWrapper } from "./header.styles";

interface HeaderProps {
  onThemeClick: any;
}

const Header: React.FC<HeaderProps> = ({ onThemeClick }) => {
  return <HeaderWrapper onClick={onThemeClick}>Header</HeaderWrapper>;
};

export default Header;
