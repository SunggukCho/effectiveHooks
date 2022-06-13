import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import useTabs from '../hooks/useTabs';
import useTitle from '../hooks/useTitle';

const content = [
  {
    tab: "section1",
    content: "section 1 content"
  },
  {
    tab: "section2",
    content: "section 2 content"
  }
]

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  const useTabTitle = useTitle("useTab's title 👍")

  return (
    <>
      {
        content.map((section, index) => (
          <button key={setSelectionRange.tab} onClick={()=> changeItem(index)}>{section.tab}</button>
        ))
      }
      <div>
        {currentItem.content}
      </div>
    </>
  )
}

export default UseTabs