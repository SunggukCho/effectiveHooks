import React, { useEffect } from 'react'

const useBeforeLeave = onbefore => {
  const handle = () => console.log('leaving')
  useEffect(()=> {
    document.addEventListener('mouseleave', handle)
    return () => document.removeEventListener('mouseleave', handle)
  }, [])

  if (typeof onbefore === 'function') {
    return;
  }
  
} 

export default useBeforeLeave