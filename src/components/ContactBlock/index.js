import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

import { 
    StyledContainer,
    StyledText,
    Email,
    EmailText,
    EmailButton,
} from './styles';
import SepLine from "@/components/SepLine";

export default function QuoteBlock(props) {

    const {quote,name,pic} = props;
    const quote_img_size = 23;
       
    return (
        <StyledContainer>
            <View style={{paddingHorizontal:20,paddingVertical:20}}>
                <SepLine />
            </View>

                {/* <View> */}
                <StyledText>subscribe to our community</StyledText>
                <Email>
                    <EmailText>email</EmailText>
                    <EmailButton>
                        {/* <Image source={require("../../../assets/images/send.png")} resizeMode={"contain"} style={{height:18,width:18}}/> */}
                    </EmailButton>
                </Email>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome5 name="facebook-f" size={14} color="white" style={{marginRight:7}}/>
                    <FontAwesome5 name="instagram" size={16} color="white" />
                </View>
                {/* </View> */}

            <View style={{paddingHorizontal:20,marginTop:20}}>
                <SepLine />
            </View>

        </StyledContainer>
    );
}
  