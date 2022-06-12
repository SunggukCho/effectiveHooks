import useTabs from '../hooks/useTabs';

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

  return (
    <>
      {
        content.map((section, index) => (
          <button onClick={()=> changeItem(index)}>{section.tab}</button>
        ))
      }
      <div>
        {currentItem.content}
      </div>
    </>
  )
}

export default UseTabs