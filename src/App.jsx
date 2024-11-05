import React from "react";
import { useTabs } from "./hooks/useTabs";

// 활용 예시 - useTabs
const App = () => {
  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1",
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      {content.map((section, index) => (
        <React.Fragment key={index}>
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        </React.Fragment>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};

export default App;
