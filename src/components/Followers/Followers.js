import { useState, useEffect } from 'react';

import Button from 'components/Button';
import Box from 'components/Box';

import { Wraper, FollowersCount, Title } from './Followers.styled';

const Followers = () => {
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem('count')) || 100500
  );

  const [title, setTitle] = useState(
    () => JSON.parse(localStorage.getItem('title')) || 'Follow'
  );

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('title', JSON.stringify(title));
  }, [count, title]);

  const formatCount = count.toLocaleString('en-US');

  const handleClick = () => {
    if (title === 'Follow') {
      setTitle('following');
    } else {
      setTitle('Follow');
    }

    if (count === 100500) {
      setCount(prevState => prevState + 1);
    } else {
      setCount(prevState => prevState - 1);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Wraper>
        <FollowersCount>{formatCount}</FollowersCount>
        <Title>followers</Title>
      </Wraper>
      <Button title={title} click={handleClick} />
    </Box>
  );
};

export default Followers;
