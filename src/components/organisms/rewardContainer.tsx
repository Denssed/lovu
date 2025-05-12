import { useEffect, useState } from "react";
import { rewardType } from "../../types/rewadType";
import RewardCard from "../molecules/reward";
import { getDatabase, onValue, ref } from "firebase/database";
import fire from "../../configuration";

let rewardData: rewardType[] = [
  {
    id: "1",
    title: "Free Coffee",
    description: "Enjoy a free cup of coffee at your favorite café.",
    category: "food",
    points: [
      { id: 1, category: "common", value: 100 },
      { id: 2, category: "special", value: 20 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "2",
    title: "Weekend Getaway",
    description: "A two-night stay at a cozy countryside hotel.",
    category: "travel",
    points: [
      { id: 1, category: "common", value: 500 },
      { id: 2, category: "special", value: 50 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "3",
    title: "Spa Day",
    description: "Relax with a full day of spa treatments.",
    category: "self-care",
    points: [
      { id: 1, category: "common", value: 300 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "4",
    title: "Dinner for Two",
    description: "A gourmet dinner for two at a fine dining restaurant.",
    category: "food",
    points: [
      { id: 1, category: "common", value: 200 },
      { id: 2, category: "special", value: 30 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "5",
    title: "Flight Voucher",
    description: "A $100 voucher for your next flight.",
    category: "travel",
    points: [
      { id: 1, category: "common", value: 400 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "6",
    title: "Yoga Class Package",
    description: "A package of 5 yoga classes at a local studio.",
    category: "self-care",
    points: [
      { id: 1, category: "common", value: 150 },
      { id: 2, category: "special", value: 15 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "7",
    title: "Gourmet Chocolate Box",
    description: "A box of premium handmade chocolates.",
    category: "food",
    points: [
      { id: 1, category: "common", value: 100 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "8",
    title: "City Tour",
    description: "A guided tour of the city's top attractions.",
    category: "travel",
    points: [
      { id: 1, category: "common", value: 250 },
      { id: 2, category: "special", value: 25 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
  {
    id: "9",
    title: "Meditation App Subscription",
    description: "A 6-month subscription to a popular meditation app.",
    category: "self-care",
    points: [
      { id: 1, category: "common", value: 120 },
    ],
    redeemAt: new Date(),
    hasDiscount: false,
    discount: 0,
  },
];

const RewardContainer: React.FC = () => {
  const [data, setData] = useState<rewardType[]>([]);

  useEffect(() => {
    const database = getDatabase(fire);

    const collectionRef = ref(database, "test");

    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.values(data) as rewardType[];
          setData(dataArray);
        }
      });
    };
    fetchData();

    rewardData = data;
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      {rewardData.map((reward) => (
        <RewardCard
          key={reward.id}
          id={reward.id}
          title={reward.title}
          description={reward.description}
          category={reward.category}
          points={reward.points}
          redeemAt={reward.redeemAt}
          hasDiscount={reward.hasDiscount}
          discount={reward.discount}
        />
      ))}
    </div>
  );
};

export default RewardContainer;
