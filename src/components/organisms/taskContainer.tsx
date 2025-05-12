import { useState } from "react";
import useGetData from "../../hooks/useGetData";
import { buttonType } from "../../types/buttonType";
import { selectType } from "../../types/selectType";
import { taskType } from "../../types/taskType";
import ButtonComponent from "../atoms/button";
import SelectComponent from "../atoms/select";
import TaskCard from "../molecules/task";

// const taskData: taskType[] = [
//   {
//     id: "1",
//     title: "Practice Mindfulness",
//     category: "self-care",
//     points: [
//       { id: 1, category: "common", value: 100 },
//       { id: 2, category: "special", value: 20 },
//     ],
//     createdAt: new Date(),
//   },
//   {
//     id: "2",
//     title: "Read a Self-Help Book",
//     category: "self-care",
//     points: [
//       { id: 1, category: "common", value: 200 },
//       { id: 2, category: "special", value: 50 },
//     ],
//     createdAt: new Date(),
//   },
//   {
//     id: "3",
//     title: "Organize Study Notes",
//     category: "study",
//     points: [{ id: 1, category: "common", value: 300 }],
//     createdAt: new Date(),
//   },
//   {
//     id: "4",
//     title: "Review Flashcards",
//     category: "study",
//     points: [
//       { id: 1, category: "common", value: 400 },
//       { id: 2, category: "special", value: 30 },
//     ],
//     createdAt: new Date(),
//   },
//   {
//     id: "5",
//     title: "Take a Relaxing Bath",
//     category: "self-care",
//     points: [{ id: 1, category: "common", value: 500 }],
//     createdAt: new Date(),
//   },
//   {
//     id: "6",
//     title: "Watch an Educational Video",
//     category: "study",
//     points: [
//       { id: 1, category: "common", value: 600 },
//       { id: 2, category: "special", value: 40 },
//     ],
//     createdAt: new Date(),
//   },
//   {
//     id: "7",
//     title: "Write in a Gratitude Journal",
//     category: "self-care",
//     points: [{ id: 1, category: "common", value: 700 }],
//     createdAt: new Date(),
//   },
// ];


const TaskContainer: React.FC = () => {

  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const { data, loading, error } = useGetData<taskType[] | null>(
    "main/user/tasks"
  );

  // const handleSelectChange = (event: CustomEvent) => {
  //   setSelectedTask(event.detail.value);
  //   console.log("Selected Task:", selectedTask);
  //   // Aquí puedes manejar el valor seleccionado, por ejemplo, actualizar un estado
  // };

  if (loading) {
    // TODO Add a loading spinner or skeleton
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO Handle error state
    return <p>Error: {error}</p>;
  }

  const selectTasskData: selectType = {
    interface: "action-sheet",
    placeholder: "Select Task",
    data: data || [],
    onChange: (event: CustomEvent) => {
      setSelectedTask(event.detail.value); // Update state with selected value
      console.log("Selected Task:", event.detail.value);
    },
  };
  
  const taskButton: buttonType = {
    title: "Add Task",
    expand: "block",
    outline: "solid",
    isTask: true,
    onClick: () => {
      if (selectedTask) {
        console.log("Selected Task (on Button Click):", selectedTask); // Imprime el valor seleccionado
      } else {
        console.log("No task selected"); // Mensaje si no hay tarea seleccionada
      }
    },
  };

  

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center p-2">
        <div className="flex flex-col justify-start gap-2 w-full">
          <span>Add a Task to your day</span>
          <SelectComponent
            {...selectTasskData}
          ></SelectComponent>
        </div>
        <div className="w-10">
          <ButtonComponent
           {...taskButton}
            />
        </div>
      </div>
      {data ? (
        data.map((task: taskType) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            category={task.category}
            points={task.points}
            createdAt={task.createdAt}
          />
        ))
      ) : (
        <p>No Tasks available</p>
      )}
    </div>
  );
};

export default TaskContainer;
