import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native'
import { useSelector } from "react-redux";

import { 
    StyledContainer,
    SummaryWrapper,
    SummaryText,
} from './styles';
import SepLine from "@/components/SepLine";

export default function ArticleSummary(props) {
    const {data} = props;
    const fontSize = useSelector(state => state.articleFontSize);

    let summary = [];
    data.split('\r\n').forEach(item => {
        summary.push(
            <SummaryText style={fontSize? ({fontSize:fontSize,lineHeight:fontSize*1.3}):(null)}>{'・'+item}</SummaryText>
        );
    });

       
    return (
        <StyledContainer>
            <View style={{paddingHorizontal:20}}>
                <SepLine title={'introduction'}/>
            </View>

            <SummaryWrapper>
                {summary}
            </SummaryWrapper>

        </StyledContainer>
    );
}
  