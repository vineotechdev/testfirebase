import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonText
} from '@ionic/react';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() => {
    FirebaseAuthentication.getCurrentUser().then(result => {
      setUserEmail(result.user?.email ?? 'Unknown user');
    });
  }, []);

  const handleLogout = async () => {
    await FirebaseAuthentication.signOut();
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonText>
          <h2>Hello, {userEmail}</h2>
        </IonText>
        <IonButton expand="block" color="danger" onClick={handleLogout}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
