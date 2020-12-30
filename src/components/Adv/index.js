import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

import { 
    StyledContainer,
} from './styles';
import SepLine from "@/components/SepLine";

export default function Adv(props) {

    const {pic} = props;

    return (
        <StyledContainer>
             {/* <View style={{paddingHorizontal:20,paddingVertical:20}}>
                <SepLine title={'廣告贊助'}/>
             </View> */}
        
            <Image 
                resizeMode={"contain"} 
                source={require("../../../assets/images/ad.png")} 
                style={{width:'95%', height:230}}
            />
        </StyledContainer>
    );
}
  