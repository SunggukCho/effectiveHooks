import useInput from '../hooks/useInput';
import useTitle from '../hooks/useTitle';

const UseInput = () => {
  const name = useInput("Smith");
  const useInputTitle = useTitle("INPUT! 👌")

  return (
    <input type="text" {...name} />
  )
}

export default UseInput