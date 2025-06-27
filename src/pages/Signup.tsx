// src/pages/Signup.tsx
import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
  IonText
} from '@ionic/react';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useHistory } from 'react-router';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  const history = useHistory();

  const handleSignup = async () => {
    try {
      await FirebaseAuthentication.createUserWithEmailAndPassword({ email, password });
      setToastMessage('Signup successful!');
      setErrorText('');
      history.push('/home');
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message);
      setToastMessage('Signup failed.');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2 className="ion-text-center">Sign Up</h2>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            placeholder="Enter your email"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            placeholder="Create a password"
          />
        </IonItem>

        {errorText && (
          <IonText color="danger" className="ion-padding-start ion-margin-top">
            <p>{errorText}</p>
          </IonText>
        )}

        <IonButton expand="block" onClick={handleSignup} className="ion-margin-top">
          Sign Up
        </IonButton>

        <IonText className="ion-text-center ion-margin-top">
          <p onClick={() => history.push('/login')} style={{ cursor: 'pointer', color: 'blue' }}>
            Already have an account? Login
          </p>
        </IonText>

        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setToastMessage('')}
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
