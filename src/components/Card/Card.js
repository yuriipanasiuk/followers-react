import { Wraper } from './Card.styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import ImageWraper from 'components/ImageWraper';
import Avatar from 'components/Avatar';
import Tweets from 'components/Tweets';
import Followers from 'components/Followers';

const Card = () => {
  return (
    <Wraper>
      <Container>
        <Logo />
        <ImageWraper />
        <Avatar />
        <Tweets />
        <Followers />
      </Container>
    </Wraper>
  );
};

export default Card;
