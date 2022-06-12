import { useState } from 'react';

const useInput = initialValue => {
  const [value, setvalue] = useState(initialValue);
  const onChange = event => {
    setvalue(event.target.value);
  }
  return {
    value,
    onChange
  }
}

export default useInput