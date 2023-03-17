import { Image, Border, AvatarWraper, Img } from './Avatar.styled';
import boy from '../../images/boy.png';

const Avatar = () => {
  return (
    <AvatarWraper>
      <Border />
      <Image>
        <Img src={boy} alt="avatar" />
      </Image>
    </AvatarWraper>
  );
};

export default Avatar;
