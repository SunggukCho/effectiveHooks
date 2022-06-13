import { useState, useEffect } from 'react';

const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);

  return setTitle
}

export default useTitle