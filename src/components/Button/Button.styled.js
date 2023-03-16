import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background-color: ${({ color }) =>
    color === 'Follow' ? '#EBD8FF' : '#5CD3A8'};

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;
`;
