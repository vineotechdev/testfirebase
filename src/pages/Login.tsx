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

  const googleLogin = async () => {
    try {
      const result = await FirebaseAuthentication.signInWithGoogle()
      console.log('Google login result:', result);
      setToastMessage('Google login successful!');
      setErrorText('');
      history.push('/home');
    } catch (err: any) {
      console.error('Google login error:', err);
      setErrorText(JSON.stringify(err)); // show on screen
      setToastMessage('Google login failed.');
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
        <br />
        <br />
        <br />
        <button
          onClick={googleLogin}
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: '12px 20px',
            fontSize: 16,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          Sign in with Google
        </button>


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
