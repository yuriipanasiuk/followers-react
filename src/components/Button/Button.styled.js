import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  box-shadow: ${p => p.theme.shadows.buttonShadow};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${({ color }) =>
    color === 'Follow' ? '#EBD8FF' : '#5CD3A8'};

  font-family: Montserrat;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${p => p.theme.colors.buttonTitleColor};

  cursor: pointer;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.04;
  }
`;
