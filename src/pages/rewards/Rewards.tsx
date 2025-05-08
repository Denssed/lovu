import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RewardContainer from '../../components/organisms/rewardContainer';

const Rewards: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='p-2'>
          <IonTitle>Rewards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RewardContainer />
      </IonContent>
    </IonPage>
  );
};

export default Rewards;
