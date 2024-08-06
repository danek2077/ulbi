import React from 'react';

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>
        <div>{count}</div>
      </div>
    );
};
