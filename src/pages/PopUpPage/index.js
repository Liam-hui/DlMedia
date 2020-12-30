import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '@/store';
import {View, Image, Text, Modal, TouchableOpacity, ScrollView} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import MemberIcon from '@/components/MemberIcon';

import PopUpPageSearch from '../PopUpPageSearch';
import PopUpPageSearchResult from '../PopUpPageSearchResult';
import History from '../History';

import { 
    StyledContainer,
    TopBarContainer,
    HeadingText,
    NotiRow,
    NotiShortName,
    NotiName,
} from './styles';

export default function PopUpPage(props) {

    const popUpPage = useSelector(state => state.popUpPage);

    return (
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={popUpPage.on}
        >
            <StyledContainer>
                <BlurView blurType="dark" blurAmount={10} style={{position:'absolute',height:'100%',width:'100%'}}/>   
                <ScrollView contentContainerStyle={{paddingBottom:60}}>
                    <Content mode={popUpPage.mode}/>
                </ScrollView>
                <View style={{position:'absolute',bottom:10,left:10,height:40,width:40}}>
                    <MemberIcon width={40}/>
                </View>
            </StyledContainer>
        </Modal>
    );
        
}

const TopBar = ({headingText}) => {
    return(
        <TopBarContainer>
            <TouchableOpacity onPress={()=>store.dispatch({type:'POP_UP_PAGE_OFF'})}>
                <Image source={require("../../../assets/images/icons/icon-right-arrow.png")} resizeMode={'contain'} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <HeadingText>
                {headingText}
            </HeadingText>
        </TopBarContainer>
    );
}

const Content = ({mode}) => {
    switch(mode) {
        case null:
            return null;
        case 'notification':
            return (
                <>
                    <TopBar headingText='Alerts'/>
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
        case 'search':
            return <PopUpPageSearch/>;
        case 'searchResult':
            return (
                <>
                    <TopBar headingText={store.getState().popUpPage.searchText}/>
                    <PopUpPageSearchResult/>
                </>
            );
        case 'history':
            return (
                <>
                    <TopBar headingText='History'/>
                    <History/>
                </>
            );
    }
}

const NotificationRow = ({shortName,name}) => {
    return (
        <NotiRow>
            <NotiShortName>{shortName}</NotiShortName>
            <NotiName>{name}</NotiName>
        </NotiRow>
    );
}

  