import { taskType } from "../../types/taskType";
import TaskCard from "../molecules/task";

const taskData: taskType[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Description for Task 1",
        category: "food",
        points: 100,
        createdAt: new Date(),
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description for Task 2",
        category: "travel",
        points: 200,
        createdAt: new Date(),
    },
    {
        id: "3",
        title: "Task 3",
        description: "Esta actividad se trata sobre poder escribir en un cuaderno o en una hoja de papel lo que sientes, lo que piensas y lo que deseas. Es una actividad que te ayudará a liberar tu mente y a sentirte más ligero.",
        category: "self-care",
        points: 300,
        createdAt: new Date(),
    },
    {
        id: "4",
        title: "Task 4",
        description: "Description for Task 4",
        category: "food",
        points: 400,
        createdAt: new Date(),
    },
    {
        id: "5",
        title: "Task 5",
        description: "Description for Task 5",
        category: "travel",
        points: 500,
        createdAt: new Date(),
    },
    {
        id: "6",
        title: "Task 6",
        description: "Description for Task 6",
        category: "self-care",
        points: 600,
        createdAt: new Date(),
    },
    {
        id: "7",
        title: "Task 7",
        description: "Description for Task 7",
        category: "food",
        points: 700,
        createdAt: new Date(),
    },
];

const TaskContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {taskData.map((task: taskType) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          category={task.category}
          points={task.points}
          createdAt={task.createdAt}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
