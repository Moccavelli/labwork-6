import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logInOutline, personAddOutline } from 'ionicons/icons';
import React from 'react';
import eye from '../assets/eye.svg';

const Login: React.FC = () => {
  const router = useIonRouter();

  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("doLogin");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false} className="ion-padding">
        <div className="ion-text-center ion-padding">
          <img src={eye} alt="eye" width={"50%"} />
        </div>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput fill="outline" labelPlacement="floating" label='Email' type='email' placeholder='Enter your email' required></IonInput>
              <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label='Password' type='password' placeholder='Enter your password' required></IonInput>
              <IonButton expand="full" type="submit" className="ion-margin-top">
                Login
                <IonIcon icon={logInOutline} slot="end" /></IonButton>
              <IonButton routerLink="/register" type="button" expand="full" fill="clear" className="ion-margin-top">
                Create Account
                <IonIcon icon={personAddOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Login;
