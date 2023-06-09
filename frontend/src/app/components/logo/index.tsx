import React from "react";
import CarLogo from "../../../assets/images/car-logo.png";

import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}

  img {
    width: auto;
    height: 100%;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogo} alt="car logo" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
}

export default Logo;
