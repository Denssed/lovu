import RewardCard from "../molecules/reward";

const rewardData = [
  {
    id: "1",
    title: "Reward 1",
    description: "Description for Reward 1",
    category: "food",
    pointCost: 100,
    redeemAt: new Date(),
  },
  {
    id: "2",
    title: "Reward 2",
    description: "Description for Reward 2",
    category: "travel",
    pointCost: 200,
    redeemAt: new Date(),
  },
  {
    id: "3",
    title: "Reward 3",
    description: "Description for Reward 3",
    category: "self-care",
    pointCost: 300,
    redeemAt: new Date(),
  },
  {
    id: "4",
    title: "Reward 4",
    description: "Description for Reward 4",
    category: "food",
    pointCost: 400,
    redeemAt: new Date(),
  },
  {
    id: "5",
    title: "Reward 5",
    description: "Description for Reward 5",
    category: "travel",
    pointCost: 500,
    redeemAt: new Date(),
  },
  {
    id: "6",
    title: "Reward 6",
    description: "Description for Reward 6",
    category: "self-care",
    pointCost: 600,
    redeemAt: new Date(),
  },
  {
    id: "7",
    title: "Reward 7",
    description: "Description for Reward 7",
    category: "food",
    pointCost: 700,
    redeemAt: new Date(),
  },
  {
    id: "8",
    title: "Reward 8",
    description: "Description for Reward 8",
    category: "travel",
    pointCost: 800,
    redeemAt: new Date(),
  },
  {
    id: "9",
    title: "Reward 9",
    description: "Description for Reward 9",
    category: "self-care",
    pointCost: 900,
    redeemAt: new Date(),
  },
];

const RewardContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {rewardData.map((reward) => (
        <RewardCard
          key={reward.id}
          id={reward.id}
          title={reward.title}
          description={reward.description}
          category={reward.category}
          pointCost={reward.pointCost}
          redeemAt={reward.redeemAt}
        />
      ))}
    </div>
  );
};

export default RewardContainer;
