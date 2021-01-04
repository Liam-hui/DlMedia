import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {View, Image, Text, Modal, TouchableOpacity, ScrollView,SafeAreaView} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import MemberIcon from '@/components/MemberIcon';
import Search from '../Search';
import SearchResult from '../SearchResult';
import History from '../History';
import NotificationSetting from '../NotificationSetting';

import { 
    StyledContainer,
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
                <ScrollView  contentContainerStyle={{paddingBottom:60}}>
                    <Content mode={popUpPage.mode}/>
                </ScrollView>
                <View style={{position:'absolute',bottom:10,left:10,height:40,width:40}}>
                    <MemberIcon width={40}/>
                </View>
            </StyledContainer>
        </Modal>
    );
        
}

const Content = ({mode}) => {
    switch(mode) {
        case null:
            return null;
        case 'notification':
            return <NotificationSetting/>;
        case 'search':
            return <Search/>;
        case 'searchResult':
            return <SearchResult/>;
        case 'history':
            return <History/>;
    }
}
