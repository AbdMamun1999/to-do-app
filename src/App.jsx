import { Toaster } from "react-hot-toast";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="bg-primary  w-full h-[100vh] flex flex-col justify-center items-center">
      <Todo />
      <Toaster />
    </div>
  );
}

export default App;
