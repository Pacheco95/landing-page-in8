import React from 'react';
import styled from 'styled-components';

import DesktopHeaderImage from 'assets/images/index-image.jpg';

const HeaderWrapper = styled.header`
  background-image: url(${DesktopHeaderImage});
  height: 100vh;
`;

function Header() {
  return <HeaderWrapper></HeaderWrapper>
}

export default Header;
