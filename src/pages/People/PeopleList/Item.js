import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'

import { 
    StyledItem,
    GradientWrapper,
    OtherInformationTextWrapper,
    OtherInformationText,
    OptionText,
    TitleText,
    ContentText,
    Row,
    Sep,
} from './styles';
import Animated,{
    useSharedValue,
    withTiming,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    interpolate,
    useAnimatedProps,
    useDerivedValue,
    Extrapolate,
    Easing,
  } from "react-native-reanimated";

import SepLine from "@/components/SepLine";
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SEP_HEIGHT = 56;
const ACTIVATE_POS = SCREEN_HEIGHT*0.6;

export default function Item(props) {

    const {item,pos} = props;

    let animate = useSharedValue(0);
    let move = useSharedValue(0);
    let on = useSharedValue(false);

    useDerivedValue(() => {
        if(props.scroll){
            const diff = Math.abs(props.scroll.value-SEP_HEIGHT+ACTIVATE_POS-pos);
            if(diff<SCREEN_HEIGHT*0.2 && !on.value) {
                animate.value = withTiming(1, {duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1),});
                move.value = withTiming(1, {duration: 900, easing: Easing.bezier(0.25, 0.1, 0.25, 1),});
                on.value = true;
            }
            else if(diff>SCREEN_HEIGHT*0.2 && on.value) {
                animate.value = withTiming(0, {duration: 600, easing: Easing.bezier(0.25, 0.1, 0.25, 1),});
                move.value = withTiming(0, {duration: 800, easing: Easing.bezier(0.25, 0.1, 0.25, 1),});
                on.value = false;
            }
        }
    });

    const itemStyle = useAnimatedStyle(()=>{
        const opacity = interpolate(animate.value, [0,1], [0.3, 1], Extrapolate.CLAMP)
        return {
            opacity:opacity,
        }
    })

    const topStyle = useAnimatedStyle(()=>{
        const marginTop = interpolate(move.value, [0,1], [-60, 10], Extrapolate.CLAMP)
        return {
            marginTop:marginTop,
        }
    })

    const bottomStyle = useAnimatedStyle(()=>{
        const marginBottom = interpolate(move.value, [0,1], [-100, 4], Extrapolate.CLAMP)
        return {
            marginBottom:marginBottom,
        }
    })
       
    return (
        <StyledItem as={Animated.View} style={[{width:props.width, height:props.height},itemStyle]}>
            <Image 
                resizeMode={"cover"} 
                source={{uri:item.image}}
                style={{position:'absolute', width:'100%', height:'100%'}}
                
            />

            <GradientWrapper>
                <LinearGradient 
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0.0, 0.4, 0.6, 0.8, 1]}
                    colors={['rgba(0,0,0,0.38)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']} 
                    style={{height:'100%'}}
                />
            </GradientWrapper>

            <Animated.View style={topStyle}>
                <OtherInformationTextWrapper>
                    <OtherInformationText style={{marginBottom:-4}}>5 May 2020</OtherInformationText>
                    <Sep />
                    <OtherInformationText>閱讀時間 3 分鐘</OtherInformationText>
                </OtherInformationTextWrapper>

                <Row style={{marginVertical:3,marginLeft:8}}>
                    <Image source={require("../../../../assets/images/icons/icon-video.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7,marginRight:7}}/>
                    <Image source={require("../../../../assets/images/icons/icon-audio.png")} resizeMode={"contain"} style={{height:20,width:20,opacity:0.7}}/>
                </Row>
            </Animated.View>

            <Row as={Animated.View} style={[{marginTop:'auto',paddingHorizontal:10,alignItems:'flex-end'},bottomStyle]}>
                <View>
                    <TitleText>陳奕迅</TitleText>
                    <ContentText>K歌之王・</ContentText>
                    <ContentText>粵語殘片・</ContentText>
                    <ContentText>抗疫</ContentText>
                </View>
                <Row style={{marginVertical:3,marginLeft:'auto'}}>
                    <Image source={require("../../../../assets/images/icons/icon-upvote.png")} resizeMode={"contain"} style={{height:20,width:20,marginRight:4}}/>
                    <OptionText>952</OptionText>
                    <Image source={require("../../../../assets/images/icons/icon-downvote.png")} resizeMode={"contain"} style={{height:20,width:20,marginRight:4}}/>
                    <Image source={require("../../../../assets/images/icons/icon-bookmark.png")} resizeMode={"contain"} style={{height:16,width:16}}/>
                </Row>
            </Row>

        </StyledItem>
    );
}
  