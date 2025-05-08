import { rewardType } from "../types/rewadType";

const ExploreContainer: React.FC<rewardType> = (rewad: rewardType) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <strong className="text-2xl font-bold">{rewad.title}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
