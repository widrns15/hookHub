import { useConfirm } from "./hooks/useConfirm";

// 활용 예시 - useConfirm
const App = () => {
  const deleteWorld = () => console.log("Done!!");
  const abort = () => console.log("Aborted!");
  const confirmDelete = useConfirm(
    "Are you sure you want to delete",
    deleteWorld,
    abort
  );
  return (
    <>
      <button onClick={confirmDelete}>Delete</button>
    </>
  );
};

export default App;
