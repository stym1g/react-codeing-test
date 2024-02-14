import React, { useState } from 'react';
import { Button, Typography, Box } from '@material-ui/core';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4">Count: {count}</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={decrement} disabled={count === 0}>
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
