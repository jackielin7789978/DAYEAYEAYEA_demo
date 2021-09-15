import styled from "styled-components";
import { COLOR, FONT } from "../constants/style";

const NavbarWrapper = styled.div`
  width: 100%;
  font-family: ${FONT.text_en2};
`;
const TopContainer = styled.div`
  color: ${COLOR["text-light"]};
  background: ${COLOR.warm_2};
`;
const Wrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 2;
  padding: 20px 0 15px;
  box-shadow: 0px 5px 10px 1px rgba(100, 100, 100, 0.2);
`;
const LOGO = styled.div`
  font-size: 40px;
  cursor: pointer;
  color: #333;
  margin-right: 40px;
  font-family: ${FONT.logo_ding2};
`;
const BTN = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 8px 22px;
  font-size: 16px;
  color: ${COLOR["text-dark"]};
  &:hover {
    color: ${COLOR.warm_5};
  }
`;

export default function Navbar2() {
  return (
    <NavbarWrapper>
      <TopContainer>
        <Wrapper>
          <Icons>
            <Icon>Search</Icon>
            <Icon>Login / Register</Icon>
            <Icon>Cart</Icon>
          </Icons>
        </Wrapper>
      </TopContainer>
      <BottomContainer>
        <LOGO>DAYEAYEAYEA</LOGO>
        <BTN>所有商品</BTN>
        <BTN>秋季精選</BTN>
        <BTN>個人用品</BTN>
        <BTN>廚房餐具</BTN>
        <BTN>文具雜貨</BTN>
        <BTN>戶外用品</BTN>
      </BottomContainer>
    </NavbarWrapper>
  );
}
