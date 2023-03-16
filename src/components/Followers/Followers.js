import { useState } from 'react';

import Button from 'components/Button';
import { Wraper, FollowersCount, Title } from './Followers.styled';
import Box from 'components/Box';

const Followers = () => {
  const [count, setCount] = useState(100500);
  const [title, setTitle] = useState('Follow');

  const handleClick = () => {
    if (title === 'Follow') {
      setTitle('following');
    } else {
      setTitle('Follow');
    }

    setCount(prevState => prevState + 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Wraper>
        <FollowersCount>{count}</FollowersCount>
        <Title>followers</Title>
      </Wraper>
      <Button title={title} click={handleClick} />
    </Box>
  );
};

export default Followers;
