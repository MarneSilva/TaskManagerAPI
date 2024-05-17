import AddTask from "@/components/AddTask";
import TaskList from "@/components/ListTask";
import { TaskContextProvider } from "@/context/TaskContext";

const Home = async ({}) => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">Home Page</h1>
    </main>
  );
};

export default Home;