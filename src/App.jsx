import { useTitle } from "./hooks/useTitle";

// 활용 예시 - useTabs
const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <>
      <div>hi</div>
    </>
  );
};

export default App;
