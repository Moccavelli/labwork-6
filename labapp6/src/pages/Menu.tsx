import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonMenu, IonRouterOutlet, IonItem, IonMenuToggle, IonIcon } from "@ionic/react";
import { homeOutline, logOutOutline, settingsOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "./List";
import Settings from "./Settings";

const Menu: React.FC = () => {
    const paths = [
        { name: 'Home', url: '/app/list', icon: homeOutline },
        { name: 'Misc. Desc.', url: '/app/settings', icon: settingsOutline },
        { name: 'Logout', url: '/', icon: logOutOutline },
    ];
    return (
    <>
        <IonPage>
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar color="secondary">
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="none">
                                    <IonIcon icon={item.icon} slot="start" />
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app/list" component={List} />
                    <Route path="/app/settings" component={Settings} />
                    <Route exact path="/app">
                        <Redirect to="/app/list" />
                    </Route>
                </IonRouterOutlet>
        </IonPage>
    </>
  );
};

export default Menu;