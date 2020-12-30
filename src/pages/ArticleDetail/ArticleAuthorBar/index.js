import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AuthorIcon from "@/components/AuthorIcon";

import { 
    StyledContainer,
    AuthorText,
    BarLeft,
    PicWrapper,
} from './styles';


export default function ArticleAuthorBar(props) {
    const {color,name,pic} = props;

    return (
        <StyledContainer>            
            <BarLeft>
                <LinearGradient 
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0, y: 0.5 }}
                    locations={[0.0,0.2, 1]}
                    colors={[color,color, color+'00']} 
                    style={{position:'absolute',width:'100%',height:'100%'}}
                />
            </BarLeft>
            <AuthorText>{'作者 '+name}</AuthorText>
            <AuthorIcon pic={pic} size={70} group={'inhouse'}/>
            <View style={{width:10}}/>
        </StyledContainer>
    );
}
  