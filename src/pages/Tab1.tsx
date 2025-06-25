import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IonInput, IonButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';

type FormData = {
  username: string;
  password: string;
};

const SimpleLoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Submitted:', data);
    // login user with below details in firebase test@gmailtest.com password- test@gmailtest.com
  };

  return (
    <div style={{ paddingTop: 48 }}> {/* Adds top padding for iOS */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Username (email) is required' }}
                render={({ field }) => (
                  <IonInput
                    {...field}
                    label="Email (use: test@gmailtest.com)"
                    labelPlacement="floating"
                    placeholder="Enter email (test@gmailtest.com)"
                    fill="outline"
                    type="email"
                  />
                )}
              />
              {errors.username && (
                <IonText color="danger">
                  <p>{errors.username.message}</p>
                </IonText>
              )}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <IonInput
                    {...field}
                    type="password"
                    label="Password (use: test@gmailtest.com)"
                    labelPlacement="floating"
                    placeholder="Enter password (test@gmailtest.com)"
                    fill="outline"
                  />
                )}
              />
              {errors.password && (
                <IonText color="danger">
                  <p>{errors.password.message}</p>
                </IonText>
              )}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" type="submit">
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </div>
  );
};

export default SimpleLoginForm;
