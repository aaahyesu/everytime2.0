import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #353535;
  background-color: #fff;
  height: 56px;
  padding: 0px 8px;
  margin-bottom: 8px;
`;

const Logo = styled.img`
  width: 30px;
  height: 32px;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  color: #454545;
  font-size: 16px;
  font-weight: bold;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
`;

const Border = styled.button`
  border: 1px solid #f8e1e0;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const Back = styled.img`
  width: 10px;
`;

interface HeaderProps {
  link: string;
  title: string;
  backbutton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ link, title, backbutton }) => {
  return (
    <StyledHeader>
      <div style={{ width: "140px" }}>
        <Link to={link}>
          <Logo src="/logo" alt="logo" />
        </Link>
        <HeaderTitle>{title}</HeaderTitle>
      </div>
      {backbutton && (
        <Link to="./">
          <BackButton>
            <Border>
              <Back src="/back" alt="back" />
            </Border>
          </BackButton>
        </Link>
      )}
    </StyledHeader>
  );
};

export default Header;
