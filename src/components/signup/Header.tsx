import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PAGE_PATHS } from '~/constants';

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  & h2 {
    text-align: center;
  }
`;

const LogoLink = styled(Link)`
  & img {
    width: 120px;
    height: auto; 
    vertical-align: middle;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <h2>
        <LogoLink to={PAGE_PATHS.LOGIN}>
          <img src="/public/images/signup_kakao_logo.png" alt="kakao logo" />
        </LogoLink>
      </h2>
    </Wrapper>
  );
};

export default Header;
