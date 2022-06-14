import useConfirm from '../hooks/useConfirm';

const UseConfirm = () => {
  const deleteSomething = () => console.log('삭제하는 중.....')
  const cancelDeleteSomething = () => console.log('삭제를 취소합니다.')
  const handleChange = useConfirm("정말 삭제하시겠습니까?", deleteSomething, cancelDeleteSomething);

  return (
    <button onClick={handleChange}>삭제 버튼</button>
  )
}

export default UseConfirm