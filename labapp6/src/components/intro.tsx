import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import writing-svgrepo-com from '../assets/writing-svgrepo-com.svg';
import memory-svgrepo-com from '../assets/memory-svgrepo-com.svg';
import idea-svgrepo-com from '../assets/idea-svgrepo-com.svg';

interface ContainerProps {
    onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
    return (
        <Swiper>
            <SwiperSlide>
                <img src={writing-svgrepo-com}></img>
                <IonText>
                    <h1>Welcome to the App</h1>
                    <p>CRUD.</p>
                </IonText>
            </SwiperSlide>
            <SwiperSlide>
                <img src={memory-svgrepo-com}></img>
                <IonText>
                    <h1>Remember everything.</h1>
                </IonText>
            </SwiperSlide>
            <SwiperSlide>
                <img src={idea-svgrepo-com}></img>
                <IonText>
                    <h1>Get inspired, save ideas for later.</h1>
                </IonText>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intro;