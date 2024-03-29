import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('Hello?');
  }, [value]);
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
