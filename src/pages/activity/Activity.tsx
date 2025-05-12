import { IonContent, IonPage } from '@ionic/react';
import TaskContainer from '../../components/organisms/taskContainer';
import HeaderComponent from '../../components/molecules/header';
import { headerType } from '../../types/headerType';

const Tasks: React.FC = () => {

  const headerData: headerType = {
      title: 'Rewards',
      name: 'John Doe',
      message: 'You have 100 points',
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

  return (
    <IonPage>
      <HeaderComponent title={headerData.title} name={headerData.name} message={headerData.message} points={headerData.points} />
      <IonContent fullscreen>
        <TaskContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
