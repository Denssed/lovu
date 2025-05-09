// import { useEffect, useState } from "react";
// import fire from "../configuration"
// import { getDatabase, ref, onValue } from "firebase/database";


const ExploreContainer: React.FC<object> = () => {
  
  // const [data, setData] = useState<string[]>([]);

  // useEffect(() => {
  
  //   const database = getDatabase(fire)

  //   const collectionRef = ref(database, "test")

  //   const fetchData = () => {
  //     onValue(collectionRef, (snapshot) => {
  //       const data = snapshot.val();
  //       if (data) {
  //         const dataArray = Object.values(data) as string[];
  //         setData(dataArray);
  //       }
  //     });
  //   }
  //   fetchData();
  // }, []);
  
  
  
  return (
    <div>
      <h1>Data from database:</h1>
      {/* <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ExploreContainer;
