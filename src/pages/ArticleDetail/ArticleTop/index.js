import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { 
    StyledContainer, 
    Row,
    BackText,
    TopIcon,
    CategoryText,
    TitleText,
    TagText,
    OtherInformationText,
    OptionText,
    Sep,
    GradientWrapper,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Upvote from '@/components/Upvote';
import { imagePath, date } from '@/utils/MyUtils';

export default function ArticleTop(props) {
    const {data} = props;
       
    return (
        <StyledContainer>
            <Image 
                resizeMode={"cover"} 
                source={{uri:imagePath(data.poster)}}
                style={{position:'absolute', width:"100%", height:"100%"}}
            />

            <GradientWrapper>
                <LinearGradient 
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0.0, 0.4, 0.6, 0.8, 1]}
                    colors={['rgba(0,0,0,0.38)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.95)', 'rgba(0,0,0,1)']} 
                    style={{height:'100%'}}
                />
            </GradientWrapper>

            <View style={{marginTop:'auto',paddingHorizontal:20}}>
                <CategoryText>perpetual</CategoryText>
                <TitleText>{data.title}</TitleText>
                
                <Row style={{marginVertical:8}}>
                    <OtherInformationText style={{marginBottom:-0}}>{date(data.date)}</OtherInformationText>
                    <Sep/>
                    <OtherInformationText>閱讀時間 3</OtherInformationText>
                    <Image source={require("../../../../assets/images/icons/icon-video.png")} resizeMode={"contain"}  style={{height:15,width:15,opacity:0.7,marginRight:5,marginLeft:8}}/>
                    <Image source={require("../../../../assets/images/icons/icon-audio.png")} resizeMode={"contain"} style={{height:15,width:15,opacity:0.7}}/>
                </Row>

                <Row style={{marginBottom:15}}>
                    <TagText>#貓  ＃蟋蟀</TagText>
                    <View style={{width:30}}></View>
                    <Upvote id={data.id} count={9000} size={20}/>
                </Row>
            </View>
        </StyledContainer>
    );
}
  