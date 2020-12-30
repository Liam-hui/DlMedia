import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
    StyledItem, 
    Row,
    ItemWrapper,
    TitleText,
    OtherInformationTextWrapper,
    OtherInformationText,
    Sep,
    OptionText,
    GradientWrapper,
} from './styles';
import {
    PanGestureHandler,
    NativeViewGestureHandler,
    State,
  } from 'react-native-gesture-handler';
import SepLine from "@/components/SepLine";
import LinearGradient from 'react-native-linear-gradient';

import * as RootNavigation from '@/utils/RootNavigation';

export default function SliderBlock(props) {

    const {items,title} = props;
   
    const renderItem = (item,index) => {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail')}>
                <StyledItem>
                    <Image 
                        resizeMode={"cover"} 
                        source={item.visual} 
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

                    <View style={{marginTop:10}}>
                        <OtherInformationTextWrapper>
                            <OtherInformationText style={{marginBottom:-4}}>{item.date}</OtherInformationText>
                            <Sep />
                            <OtherInformationText>閱讀時間 {item.duration}</OtherInformationText>
                        </OtherInformationTextWrapper>

                        <Row style={{marginVertical:3,marginLeft:3}}>
                            <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7,marginRight:7}}/>
                            <Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7}}/>
                        </Row>
                    </View>

                    <View style={{marginTop:'auto',marginBottom:8,paddingHorizontal:3}}>
                        <TitleText numberOfLines={2}>{item.title}</TitleText>
                        <Row style={{marginVertical:3,marginLeft:'auto'}}>
                            <Image source={require("../../../assets/images/icons/icon-upvote.png")} resizeMode={"contain"} style={{height:20,width:20,marginRight:4}}/>
                            <OptionText>{item.goodRank}</OptionText>
                            <Image source={require("../../../assets/images/icons/icon-downvote.png")} resizeMode={"contain"} style={{height:20,width:20,marginRight:4}}/>
                            <Image source={require("../../../assets/images/icons/icon-bookmark.png")} resizeMode={"contain"} style={{height:16,width:16}}/>
                        </Row>
                    </View>
                </StyledItem>
            </TouchableOpacity>
        );
    };
    
    return (
        <StyledContainer>
            <View style={{paddingHorizontal:20,paddingVertical:20}}>
                <SepLine title={title}/>
            </View>
            <NativeViewGestureHandler
                ref={props.scrollRef}
            >
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    <ItemWrapper>
                        {items.map((item, index)=>renderItem(item, index))}
                    </ItemWrapper>
                </ScrollView>
            </NativeViewGestureHandler>
        </StyledContainer>
    );
}
  