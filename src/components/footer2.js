import styled from "styled-components";
import { COLOR, FONT } from "../constants/style";

const FooterWrapper = styled.div`
  font-family: ${FONT.text_en2};
`;
const Mainarea = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${COLOR.warm_1};
  color: ${COLOR["text-light"]};
  box-shadow: 2px 2px 12px 5px rgba(100, 100, 100, 0.2);
`;
const Column = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ColumnTitle = styled.div`
  padding: 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${COLOR["text-light"]};
`;
const PageLink = styled.a`
  text-decoration: none;
  color: ${COLOR["text-light"]};
  cursor: pointer;
`;
const Copyright = styled.div`
  background: ${COLOR.warm_1};
  color: ${COLOR["text-light"]};
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
`;
export default function Footer2() {
  return (
    <FooterWrapper>
      <Mainarea>
        <Column>
          <ColumnTitle>INFORMATION</ColumnTitle>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
        </Column>
        <Column>
          <ColumnTitle>INFORMATION</ColumnTitle>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
        </Column>
        <Column>
          <ColumnTitle>INFORMATION</ColumnTitle>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
        </Column>
        <Column>
          <ColumnTitle>INFORMATION</ColumnTitle>
          <PageLink>購物需知</PageLink>
          <PageLink>購物需知</PageLink>
        </Column>
      </Mainarea>
      <Copyright>© 2021 DAYEAYEAYEA - All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
}
