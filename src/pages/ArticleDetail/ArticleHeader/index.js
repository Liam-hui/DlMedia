import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

import { 
    StyledContainer,
    HeaderText,
    HeaderLeft,
} from './styles';
import SepLine from "@/components/SepLine";

export default function ArticleHeader(props) {
    const {color,text} = props;
    const fontSize = useSelector(state => state.articleFontSize);

    return (
        <StyledContainer>
            <View style={{position:'absolute',top:0,left:0,width:'100%'}}>
                <SepLine/>
            </View>
            
            <View style={{flexDirection:'row',alignSelf: 'flex-start',marginTop:30}}>
                <HeaderLeft>
                    <LinearGradient 
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0, y: 0.5 }}
                        locations={[0.0, 1]}
                        colors={[color, color+'33']} 
                        style={{position:'absolute',width:'100%',height:'100%'}}
                    />
                </HeaderLeft>
                <HeaderText style={fontSize? ({marginTop:-fontSize*0.48,fontSize:fontSize*1.3,lineHeight:fontSize*2}):(null)}>{text}</HeaderText>
            </View>
        </StyledContainer>
    );
}
  