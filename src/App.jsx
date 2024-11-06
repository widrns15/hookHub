import { useBeforeLeave } from "./hooks/useBeforeLeave";

// 활용 예시 - useBeforeLeave
const App = () => {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default App;
