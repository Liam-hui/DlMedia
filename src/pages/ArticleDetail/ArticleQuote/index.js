import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { 
    StyledContainer,
    QuoteText,
} from './styles';
import SepLine from "@/components/SepLine";

export default function ArticleQuote(props) {
    const {color,text} = props;  

    // let quoteIcon;
    let quoteIcon = require("../../../../assets/images/article-quote-red.png");
    // else if(color=='blue') quoteIcon = require("../../../assets/images/article_quote_blue.png");

    return (
        <StyledContainer>
            <Image source={quoteIcon} resizeMode={"contain"} style={{width:60,height:40,marginRight:15}}/>

            <View style={{flex:1,marginTop:10}}>
                <QuoteText>{text}</QuoteText>
            </View>

        </StyledContainer>
    );
}
  