import { useClick } from "./hooks/useClick";

// 활용 예시 - useTabs
const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <>
      <hi ref={title}>hi</hi>
    </>
  );
};

export default App;
