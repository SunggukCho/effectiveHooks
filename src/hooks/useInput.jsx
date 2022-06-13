import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setvalue] = useState(initialValue);
  const onChange = event => {
    const { 
      target: { value }
    } = event;
    setvalue(value)
  }

  return {
    value,
    onChange
  }
}

export default useInput