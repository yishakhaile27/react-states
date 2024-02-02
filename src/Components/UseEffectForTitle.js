import React, { useState, useEffect } from 'react';

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click Count: ${count}`;
    alert('Component is mounted');
  }, [count]);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default UseEffectForTitle;
