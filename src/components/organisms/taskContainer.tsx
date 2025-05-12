import { buttonType } from "../../types/buttonType";
import { selectType } from "../../types/selectType";
import { taskType } from "../../types/taskType";
import ButtonComponent from "../atoms/button";
import SelectComponent from "../atoms/select";
import TaskCard from "../molecules/task";

const taskData: taskType[] = [
  {
    id: "1",
    title: "Practice Mindfulness",
    category: "self-care",
    points: [
      { id: 1, category: "common", value: 100 },
      { id: 2, category: "special", value: 20 },
    ],
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Read a Self-Help Book",
    category: "self-care",
    points: [
      { id: 1, category: "common", value: 200 },
      { id: 2, category: "special", value: 50 },
    ],
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Organize Study Notes",
    category: "study",
    points: [{ id: 1, category: "common", value: 300 }],
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Review Flashcards",
    category: "study",
    points: [
      { id: 1, category: "common", value: 400 },
      { id: 2, category: "special", value: 30 },
    ],
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "Take a Relaxing Bath",
    category: "self-care",
    points: [{ id: 1, category: "common", value: 500 }],
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "Watch an Educational Video",
    category: "study",
    points: [
      { id: 1, category: "common", value: 600 },
      { id: 2, category: "special", value: 40 },
    ],
    createdAt: new Date(),
  },
  {
    id: "7",
    title: "Write in a Gratitude Journal",
    category: "self-care",
    points: [{ id: 1, category: "common", value: 700 }],
    createdAt: new Date(),
  },
];

const selectTasskData: selectType = {
  interface: "action-sheet",
  placeholder: "Select Task",
  data: taskData,
};

const taskButton: buttonType = {
  title: "Add Task",
  expand: "block",
  outline: "solid",
  isTask: true,
};

const TaskContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center p-2">
        <div className="flex flex-col justify-start gap-2 w-full">
          <span>Add a Task to your day</span>
          <SelectComponent
            interface={selectTasskData.interface}
            placeholder={selectTasskData.placeholder}
            data={selectTasskData.data}
          >
          </SelectComponent>
        </div>
        <div className="w-10">
          <ButtonComponent
            title={taskButton.title}
            expand={taskButton.expand}
            outline={taskButton.outline}
            isTask={taskButton.isTask}
          />
        </div>
      </div>
      {taskData.map((task: taskType) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          category={task.category}
          points={task.points}
          createdAt={task.createdAt}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
