import useInput from '../hooks/useInput';

const UseInput = () => {
  const name = useInput("Smith");
  
  return (
    <input type="text" {...name} />
  )
}

export default UseInput