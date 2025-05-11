import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { logInOutline, personAddOutline } from 'ionicons/icons';
import React from 'react';
import eye from '../assets/eye.svg';
import Intro from '../components/intro';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = React.useState(false);
  const [present, dismiss] = useIonLoading();

  const doLogin = async (event: any) => { // verification, send data to backend
    event.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", 'root');
    }, 2000);
    // router.push("/home", 'root');
  };

  const finishIntro = async() => {
    console.log('FIN');
    setIntroSeen(true);
  };

  return (
    <>
    {!introSeen ? (
      <Intro onFinish={finishIntro} />
    ) : (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false} className="ion-padding">
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" sizeXl="4">
            <div className="ion-text-center ion-padding">
              <img src={eye} alt="eye" width={"50%"} />
            </div>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" sizeXl="4">
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
            </IonCol>
          </IonRow>

        </IonGrid>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
    )}
    </>
  );
};

export default Login;
