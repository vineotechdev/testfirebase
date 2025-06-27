// src/pages/Login.tsx
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

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await FirebaseAuthentication.signInWithEmailAndPassword({ email, password });
      setToastMessage('Login successful!');
      setErrorText('');
      history.push('/home');
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message); // show on screen
      setToastMessage('Login failed.');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2 className="ion-text-center">Login</h2>

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
            placeholder="Enter your password"
          />
        </IonItem>

        {errorText && (
          <IonText color="danger" className="ion-padding-start ion-margin-top">
            <p>{errorText}</p>
          </IonText>
        )}

        <IonButton expand="block" onClick={handleLogin} className="ion-margin-top">
          Login
        </IonButton>

        <IonText className="ion-text-center ion-margin-top">
          <p onClick={() => history.push('/signup')} style={{ cursor: 'pointer', color: 'blue' }}>
            Don't have an account? Sign Up
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

export default Login;
