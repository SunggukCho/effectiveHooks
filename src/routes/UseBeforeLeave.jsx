import useBeforeLeave from '../hooks/useBeforeLeave';

const UseBeforeLeave = () => {
  const begforlife = ()=> console.log('plz dont leave');
  useBeforeLeave(begforlife)
  return (
    <div>UseBeforeLeave</div>
  )
}

export default UseBeforeLeave