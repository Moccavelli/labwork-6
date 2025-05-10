import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personAddOutline } from 'ionicons/icons';

const Register: React.FC = () => {
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
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
