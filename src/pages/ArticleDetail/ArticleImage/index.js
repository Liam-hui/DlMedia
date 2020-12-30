import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native'

import { 
    StyledContainer,
    CaptionText,
    InfoIcon,
} from './styles';

export default function ArticleImage(props) {
    const {image,caption} = props;

    return (
        <StyledContainer>
            <Image 
                resizeMode={"cover"} 
                source={image} 
                style={{position:'absolute', width:"100%", height:"100%"}}
            />
            {caption? (
                <View style={{flexDirection:'row',marginTop:'auto',marginBottom:8,paddingHorizontal:20,alignItems:'center'}}>
                    <CaptionText >{caption}</CaptionText>
                    <TouchableOpacity style={{marginLeft:'auto'}}>
                        {/* <InfoIcon source={require("../../../assets/images/icons/icon-info.png")} resizeMode={"contain"} /> */}
                    </TouchableOpacity>
                </View>
            ):(null)}

        </StyledContainer>
    );
}
  