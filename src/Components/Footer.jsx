import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 60px;

  @media only screen and (max-width: 1440px) {
    height: 50px;
  }

  @media only screen and (max-width: 1366px) {
    height: 40px;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #f4f4f4;
  text-align: center;
  font-size: 35px;

  @media only screen and (max-width: 1440px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 25px;
  }
`;

const Portfolio = styled.a`
  color: #f4f4f4;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Text>
        Copyright &copy; 2021{' '}
        <Portfolio target="_blank" href="https://ferrero-portfolio.vercel.app/">
          Dalmiro Ferrero Beverina
        </Portfolio>
      </Text>
    </FooterStyle>
  );
};

export default Footer;
