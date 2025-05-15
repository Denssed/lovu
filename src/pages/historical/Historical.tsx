import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import HeaderComponent from '../../components/molecules/header';
import { headerType } from '../../types/headerType';
import useGetData from '../../hooks/useGetData';
import { userDataResp } from '../../types/userDataResp';
import { pointsType } from '../../types/pointsType';

const Historical: React.FC = () => {

  let headerData: headerType = {
    title: 'Rewards',
    name: ['John Doe'],
    message: ['You have 100 points'],
    points: [
      {
        id: 1, value: 20,
        category: 'common'
      },
      {
        id: 2, value: 10,
        category: 'special'
      }
    ]
  };

  const { data: userData, loading: userLoading, error: userError } = useGetData<userDataResp | null>("main/user/userData");
  const { data: pointsData, loading: pointsLoading, error: pointsError } = useGetData<pointsType[] | null>("main/user/points");

  console.log("data", userData);
  console.log("loading", userLoading);
  console.log("error", userError);
  console.log("pointsData", pointsData);
  console.log("pointsLoading", pointsLoading);
  console.log("pointsError", pointsError);

  headerData = {
    title: headerData.title,
    name: userData?.name ?? headerData.name,
    message: userData ? userData.message : headerData.message,
    points: pointsData ?? headerData.points,
  };
  
  return (
    <IonPage>
      <HeaderComponent title={headerData.title} name={headerData.name} message={headerData.message} points={headerData.points} />
      <IonContent fullscreen>
      <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Historical;
