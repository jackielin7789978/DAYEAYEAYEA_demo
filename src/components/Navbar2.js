import styled from "styled-components";
import { COLOR, FONT } from "../constants/style";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  width: 100%;
  font-family: ${FONT.text_en2};
`;
const TopContainer = styled.div`
  color: ${COLOR["text-dark"]};
  position: relative;
  padding: 20px 0px;
  z-index: 2;
  box-shadow: 0px 5px 10px 1px rgba(100, 100, 100, 0.2);
`;
const Wrapper = styled.div`
  max-width: 1700px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 160px;
  background: ${COLOR.warm_3};
`;
const LOGO = styled.div`
  font-size: 40px;
  cursor: pointer;
  font-family: ${FONT.logo_ding2};
`;
const PageLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  color: ${COLOR["text-light"]};
  &:hover {
    color: ${COLOR.warm_4};
  }
`;

export default function Navbar2() {
  return (
    <NavbarWrapper>
      <TopContainer>
        <Wrapper>
          <LOGO>DAYEAYEAYEA</LOGO>
          <Icons>
            <Icon>Search</Icon>
            <Icon>Login / Register</Icon>
            <Icon>Cart</Icon>
          </Icons>
        </Wrapper>
      </TopContainer>
      <BottomContainer>
        <PageLink to="/1">所有商品</PageLink>
        <PageLink to="/1">秋季精選</PageLink>
        <PageLink to="/1">個人用品</PageLink>
        <PageLink to="/1">廚房餐具</PageLink>
        <PageLink to="/1">文具雜貨</PageLink>
        <PageLink to="/1">戶外用品</PageLink>
        <PageLink to="/1">首頁一版</PageLink>
        <PageLink to="/2">首頁二版</PageLink>
      </BottomContainer>
    </NavbarWrapper>
  );
}
