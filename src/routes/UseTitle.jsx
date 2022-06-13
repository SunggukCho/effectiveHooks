import useTitle from '../hooks/useTitle';

const UseTitle = () => {
  const titleUpdator = useTitle("useTitle's title");

  return (
    <div>Tab 제목을 봐주세요.</div>
  )
}

export default UseTitle