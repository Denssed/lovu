import { buttonType } from "../../types/buttonType";
import { selectType } from "../../types/selectType";
import { taskType } from "../../types/taskType";
import ButtonComponent from "../atoms/button";
import SelectComponent from "../atoms/select";
import TaskCard from "../molecules/task";

const taskData: taskType[] = [
  {
    id: "1",
    title: "Prepare a Healthy Breakfast",
    description: "Cook a nutritious breakfast with eggs, avocado, and toast.",
    category: "food",
    points: 100,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Plan a Weekend Getaway",
    description: "Research and plan a short trip to a nearby destination.",
    category: "travel",
    points: 200,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Meditation Session",
    description:
      "Spend 15 minutes meditating to clear your mind and reduce stress.",
    category: "self-care",
    points: 300,
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Try a New Recipe",
    description: "Cook a new dish you've never tried before for dinner.",
    category: "food",
    points: 400,
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "Book a Flight",
    description: "Find and book a flight for your next vacation.",
    category: "travel",
    points: 500,
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "Journal Your Thoughts",
    description:
      "Write down your thoughts and feelings in a journal to reflect on your day.",
    category: "self-care",
    points: 600,
    createdAt: new Date(),
  },
  {
    id: "7",
    title: "Bake a Dessert",
    description: "Bake a delicious dessert like cookies or a cake.",
    category: "food",
    points: 700,
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
          />
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
