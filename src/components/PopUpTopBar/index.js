import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import store from '@/store';

import { 
    TopBarContainer,
    Row,
    HeadingText,
} from './styles';

export default function PopUpTopBar(props) {

    const {headingText,back} = props;

    return (
        <TopBarContainer>
            <SafeAreaView/>
            <Row>
                <TouchableOpacity onPress={()=>{if(back)back(); else store.dispatch({type:'POP_UP_PAGE_OFF'})}}>
                    <Image source={require("../../../assets/images/icons/icon-right-arrow.png")} resizeMode={'contain'} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <HeadingText>
                    {headingText}
                </HeadingText>
            </Row>
        </TopBarContainer>
    );
}
  