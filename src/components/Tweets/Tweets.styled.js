import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TweetsCount = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
  font-family: Montserrat;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.2;
  text-transform: uppercase;

  color: ${p => p.theme.colors.tweetsCount};
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.2;
  text-transform: uppercase;

  color: ${p => p.theme.colors.tweetsCount};
`;
