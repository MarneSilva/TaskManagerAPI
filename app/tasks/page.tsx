import AddTask from "@/components/AddTask";
import TaskList from "@/components/ListTask";
import { TaskContextProvider } from "@/context/TaskContext";

const Home = async ({}) => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Gestor de Tarefas
      </h1>

      <div className="grid place-items-center">
        <TaskContextProvider>
          <TaskList />
          <AddTask />
        </TaskContextProvider>
      </div>
    </main>
  );
};

export default Home;