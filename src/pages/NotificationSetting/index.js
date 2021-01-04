import React, {useState, useEffect} from 'react';
import {View} from 'react-native'
import PopUpTopBar from '@/components/PopUpTopBar';

import { 
    NotiRow,
    NotiShortName,
    NotiName,
} from './styles';

export default function NotificationSetting(props) {

    const NotificationRow = ({shortName,name}) => {
        return (
            <NotiRow>
                <NotiShortName>{shortName}</NotiShortName>
                <NotiName>{name}</NotiName>
            </NotiRow>
        );
    }
    

    return (
        <>
            <PopUpTopBar headingText='Alerts'/>
            <View style={{marginTop:20}}>
                <NotificationRow shortName={'IN'} name={'Intuition'}/>
                <NotificationRow shortName={'MA'} name={'Machine'}/>
                <NotificationRow shortName={'LI'} name={'Living'}/>
                <NotificationRow shortName={'PE'} name={'Perpetual'}/>
                <NotificationRow shortName={'AT'} name={'Attire'}/>
                <NotificationRow shortName={'PE'} name={'People'}/>
                <NotificationRow shortName={'ME'} name={'Meter'}/>
                <NotificationRow shortName={'UN'} name={'Unknown'}/>
            </View>
        </>
    );
        
}




  