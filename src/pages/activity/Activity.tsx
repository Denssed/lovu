import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TaskContainer from '../../components/organisms/taskContainer';

const Tasks: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='p-2'>
          <IonTitle>Add Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TaskContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
