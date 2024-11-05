import "./App.css";

import { useInput } from "./hooks/useInput";

// 활용 예시 - useInput
function App() {
  const maxLenAndIncludeTag = (value) =>
    value.length <= 10 && !value.includes("@");
  const name = useInput("Mr. ", maxLenAndIncludeTag);

  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </>
  );
}

export default App;
