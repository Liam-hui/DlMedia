import React, {useState, useEffect} from 'react';
import {Text,View,Image,TouchableOpacity,Dimensions } from "react-native";
import SepLine from "@/components/SepLine";
import {
  CardContainer,
  BackgroundImage,
  LeftBlack,
  GradientWrapper,
  ContentWrapper,
  PeopleName,
  ArticleTitle,
  OtherInformationWrapper,
  OtherInformationText,
  Sep,
  SmallIcon,
  ParagraphText,
  AuthorContainer,
} from './styles';
import Animated,{
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useAnimatedProps,
  interpolate,
  useDerivedValue,
  Extrapolate
} from "react-native-reanimated";
import LinearGradient from 'react-native-linear-gradient';
import VSepLine from "@/components/VSepLine";
import { imagePath,date } from '@/utils/MyUtils';

import * as RootNavigation from '@/utils/RootNavigation';
import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';

export default function PeopleCard(props) {

  const {item,active} = props;

  const [posters,setPosters] = useState([]);

  useEffect(() => {
    setPosters([item.posters[0],item.posters[1]]);
  }, []);

  let posterAnimate = useSharedValue(0);

  const posterFirstStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(posterAnimate.value, [0, 1], [0, 1], Extrapolate.CLAMP)
    return {
      // opacity:opacity,
      opacity:1,
    }
  })

  const posterSecondStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(posterAnimate.value, [0, 1], [1, 0], Extrapolate.CLAMP)
    return {
      opacity:opacity,
    }
  })

  return (
    <CardContainer key={item.id}> 

      <BackgroundImage as={Animated.Image} style={posterFirstStyle} source={posters[0]} resizeMode={'cover'}/>
      {/* <BackgroundImage as={Animated.Image} style={posterSecondStyle} source={posters[1]} resizeMode={'cover'}/> */}

      <GradientWrapper>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)']} style={{height:'100%'}}/>
      </GradientWrapper>

      <LeftBlack/>

      <ContentWrapper>
        <PeopleName>{item.name}</PeopleName>
        <ArticleTitle>{item.title}</ArticleTitle>

        <OtherInformationWrapper>
          <OtherInformationText>{date(item.date)}</OtherInformationText>
          <Sep />
          <OtherInformationText>閱讀時間 3</OtherInformationText>
            {item.hasVideo==1? (<SmallIcon source={require("../../../../assets/images/icons/icon-video.png")} resizeMode={'contain'}/>) :(null)}
            {item.hasAudio==1? (<SmallIcon source={require("../../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'}/>) :(null)}
        </OtherInformationWrapper> 

        <View style={{flexDirection:'row',height:140,width:'100%'}}>
          <ParagraphText numberOfLines={4}>創作是孤單的。頒獎禮的熱烈掌聲過後，麥浚龍公開感嘆，面對外界吹灰不費的冷親切、壞說話，</ParagraphText>
          <View style={{width:120,height:'100%'}}>

            <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
              <Upvote size={20}/>
              <Bookmark size={20}/>
            </View>
          </View>
        </View>

      </ContentWrapper>

    </CardContainer>
  );
}
