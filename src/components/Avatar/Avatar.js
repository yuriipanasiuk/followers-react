import { Image, Border, AvatarWraper } from './Avatar.styled';
import boy from '../../images/boy.png';

const Avatar = () => {
  return (
    <AvatarWraper>
      <Border />
      <Image>
        <img src={boy} alt="avatar" />
      </Image>
    </AvatarWraper>
  );
};

export default Avatar;
