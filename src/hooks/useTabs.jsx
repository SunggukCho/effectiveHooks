import { useState } from 'react'

export const useTabs = (defaultValue, allTabs) => {
  const [currentIndex, setCurrentIndex ] = useState(defaultValue)
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

export default useTabs;