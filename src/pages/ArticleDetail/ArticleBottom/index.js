import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { 
    StyledContainer, 
    Row,
    TagText,
} from './styles';
import SepLine from "@/components/SepLine";
import Upvote from '@/components/Upvote';

export default function ArticleBottom(props) {
    const {data} = props;
       
    return (
        <StyledContainer>
            <View style={{width:'100%'}}>
                <SepLine/>
            </View>

            <Row style={{marginBottom:15}}>
                <TagText>#貓  ＃蟋蟀</TagText>
                <View style={{width:30}}></View>
                <Upvote id={data.id} count={9000} size={20} color={'black'}/>
            </Row>
        </StyledContainer>
    );
}
  