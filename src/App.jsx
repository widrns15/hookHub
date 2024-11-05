import { usePreventLeave } from "./hooks/usePreventLeave";

// 활용 예시 - usePreventLeave
const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}> Unprotect</button>
    </>
  );
};

export default App;
