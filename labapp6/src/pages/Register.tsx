import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline} from 'ionicons/icons';

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };
  
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Create Account</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent scrollY={false} className="ion-padding">
      <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" sizeXl="4">
            <IonCard>
              <IonCardContent>
                <form onSubmit={doRegister}>
                  <IonInput fill="outline" labelPlacement="floating" label='Email' type='email' placeholder='Enter your email' required></IonInput>
                  <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label='Password' type='password' placeholder='Enter your password' required></IonInput>
                  <IonButton expand="full" type="submit" className="ion-margin-top">
                    Create my Account
                    <IonIcon icon={checkmarkDoneOutline} slot="end" /></IonButton>
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
  );
};

export default Register;
