import styled from 'styled-components';

export const AvatarWraper = styled.div`
  margin-top: 242px;
`;

export const Border = styled.div`
  position: absolute;
  left: 0;
  top: 214px;
  width: 380px;
  height: 8px;
  background: ${p => p.theme.colors.borderColor};
  box-shadow: ${p => p.theme.shadows.borderShadow};
`;

export const Image = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
`;

export const Img = styled.img`
  max-width: 100%;
`;
