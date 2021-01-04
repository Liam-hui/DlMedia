import React, {useState, useEffect} from 'react';
import {Text,View,Image,TouchableOpacity,Dimensions,Platform } from "react-native";
import {
  CardContainer,
  StyledItemBackgroundImage,
  GradientWrapper,
  LeftBlack,
  ReactionWrapper,
  InformationWrapper ,
  InformationText,
  ArticleTitle,
  BeforeTitle,
  ArticleTag,
  ArticleTitleWrapper,
  SmallBackground,
  Sep,
  ItemDot,
  ItemNumberWrapper,
  ItemNumber,
  ItemNumberText,
  VSep,
  IconWrapper,
  Icon,
  IconText,
  SmallIcon,
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
import SepLine from "@/components/SepLine";
import AuthorIcon from "@/components/AuthorIcon";
import { imagePath,date } from '@/utils/MyUtils';

import * as RootNavigation from '@/utils/RootNavigation';
import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const VISUAL_HEIGHT = Math.round(SCREEN_HEIGHT*0.8);
const VISUAL_MIN_HEIGHT = 29;

const maxAmount = VISUAL_HEIGHT - VISUAL_MIN_HEIGHT;

const ICON_WIDTH = 78;
const LEFT_SPACE = 85;
const BOTTOM_ANIMATE_DIST = 75;
const TITLE_LARGE_SCALE = 1;
const TITLE_SMALL_SCALE = 0.464;
const TITLE_RIGHT_SPACE = 100;
const TITLE_LARGE_WIDTH =  (SCREEN_WIDTH - LEFT_SPACE - ICON_WIDTH) /TITLE_LARGE_SCALE ;
const TITLE_LINE_HEIGHT = 34;

export default function Card(props) {
  const {item, index, mode, activeIndex, amount, animating, direction, openCard, openingCard} = props;

  const [lines,setLines] = useState([]);

  const containerStyle = useAnimatedStyle(() => {
    let min_height = VISUAL_HEIGHT;
    if(index<activeIndex.value || ( index==activeIndex.value && !animating.value && direction.value==-1) || ( index==activeIndex.value && animating.value && direction.value==1) ) min_height = 0;
    let height = interpolate(amount.value,[0,maxAmount], [min_height,VISUAL_HEIGHT], Extrapolate.CLAMP);
    return {
      height: height,
      top: index*VISUAL_MIN_HEIGHT,
    }
  });

  const titleWrapperStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], Platform.OS==='android'?[-3,70]:[-4,60], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      left:LEFT_SPACE,
      // backgroundColor:'blue',
    }
  })  

  const titleStyle = useAnimatedStyle(()=>{
    const scale = interpolate(amount.value, [0,maxAmount], [TITLE_SMALL_SCALE, TITLE_LARGE_SCALE], Extrapolate.CLAMP)
    const height = interpolate(amount.value, [0,maxAmount], [TITLE_LINE_HEIGHT, TITLE_LINE_HEIGHT*lines], Extrapolate.CLAMP)
    const width = (SCREEN_WIDTH - LEFT_SPACE - TITLE_RIGHT_SPACE)/TITLE_SMALL_SCALE;
    const translateX = width*(scale-1)*0.5/scale;

    return {
      // transform: [{scale:scale},{translateX:translateX },{translateY:TITLE_LINE_HEIGHT*(scale-1)*0.5/scale}],
      transform: [{scale:scale},{translateX:translateX }],
      width:width,
      height:height,
      left:-2,
      // backgroundColor:'red',
    }
  })

  const titleSmallStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [1, -1.5], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      position:'absolute',
      width:'100%',
      lineHeight:TITLE_LINE_HEIGHT,
    }
  })

  const titleLargeStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1.5], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      position:'absolute',
      width: TITLE_LARGE_WIDTH,
      lineHeight:TITLE_LINE_HEIGHT,
    }
  })

  const articleCategoryStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
    }
  })

  const articleTagStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [40-BOTTOM_ANIMATE_DIST, 40], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      bottom:bottom,
      left:LEFT_SPACE,
    }
  })

  const InformationStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [26-BOTTOM_ANIMATE_DIST, 26], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [-0.3, 1], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      opacity:opacity,
      left:LEFT_SPACE,
    }
  })

  const ReactionStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [0,20], Extrapolate.CLAMP)
    const scale = interpolate(amount.value, [0,maxAmount], [0.7, 1], Extrapolate.CLAMP)
    const translateX = interpolate(amount.value, [0,maxAmount], [20, 0], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      transform: [{scale:scale},{translateX:translateX}],
    }
  })

  const itemDotStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [1, 0], Extrapolate.CLAMP)
    const scale = interpolate(amount.value, [0,maxAmount], [1, 0], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      bottom:4,
      transform: [{scale:scale}],
    }
  })

  const itemNumberStyle = useAnimatedStyle(()=>{
    let pos = Platform.OS==='android'? VISUAL_HEIGHT-39 : VISUAL_HEIGHT-33;
    if(index<activeIndex.value || ( index==activeIndex.value && !animating.value && direction.value==-1) || ( index==activeIndex.value && animating.value && direction.value==1) ) pos = -10;
    const top = interpolate(amount.value, [0,maxAmount], [pos, 165], Extrapolate.CLAMP)
    const scale = interpolate(amount.value, [0,maxAmount], [0.3, 1], Extrapolate.CLAMP)
    return {
      top:top,
      transform: [{scale:scale}],
    }
  })

  const VSepStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    const paddingTop = interpolate(amount.value, [0,maxAmount], [400, 210], Extrapolate.CLAMP)
    return {
      paddingTop:paddingTop,
      opacity:opacity,
    }
  })

  const smallBackgroundStyle = useAnimatedStyle(()=>{
    let opacity_ = 1;
    if(!openingCard.value && ( index<activeIndex.value || ( index==activeIndex.value && !animating.value && direction.value==-1) || ( index==activeIndex.value && animating.value && direction.value==1) ) ) opacity_ = 0;
    const opacity = interpolate(amount.value, [0,maxAmount*0.2], [opacity_, 0], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      height:'100%',
    }
  })

  const gradientStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
    }
  })

  const picStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [60-BOTTOM_ANIMATE_DIST, 60], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      opacity:opacity,
    }
  })

  return (
     <CardContainer key={item.id} as={Animated.View} style={[{zIndex:10-index},containerStyle]}> 

      <StyledItemBackgroundImage source={{uri:imagePath(item.poster)}}/>

      <GradientWrapper as={Animated.View} style={gradientStyle}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)']} style={{height:'100%'}}/>
      </GradientWrapper>

      <SmallBackground as={Animated.View} style={smallBackgroundStyle}>
        <LinearGradient colors={['rgba(65,65,65,0.55)', 'rgba(13,13,13,0.85)']} start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}} style={{height:'100%',width:'100%'}}/>  
      </SmallBackground>

      <LeftBlack/>

      <VSep as={Animated.View} style={VSepStyle}>
          <SepLine vertical={true} color='white'/>
      </VSep>

      <ArticleTitleWrapper as={Animated.View} style={titleWrapperStyle}>
        <ArticleTitle onTextLayout={({ nativeEvent: {lines} }) => setLines(lines.length)} numberOfLines={3} style={{position:'absolute',opacity:0,width:TITLE_LARGE_WIDTH}}>{item.title}</ArticleTitle>
        
        <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail',{id:item.id})}>

          <Animated.View style={titleStyle}>
            <ArticleTitle as={Animated.Text} numberOfLines={1} style={titleSmallStyle}>{item.title}</ArticleTitle>
            <ArticleTitle as={Animated.Text} numberOfLines={3} style={titleLargeStyle}>{item.title}</ArticleTitle>
          </Animated.View>

        </TouchableOpacity>

        <BeforeTitle as={Animated.Text} style={articleCategoryStyle}>asdf</BeforeTitle>
        
      </ArticleTitleWrapper>

      <IconWrapper as={Animated.View} style={picStyle}>
        <AuthorIcon pic={item.authorPic} size={70} group={'inhouse'}/>
        <IconText>Vincent Lau</IconText>
      </IconWrapper>

      <ArticleTag as={Animated.Text} style={articleTagStyle}>as</ArticleTag>

      <InformationWrapper as={Animated.View} style={InformationStyle}>
        <InformationText>{date(item.date)}</InformationText>
        <Sep />
        <InformationText>閱讀時間 3</InformationText>
          {item.hasVideo==1? (<SmallIcon as={Animated.Image} source={require("../../../../assets/images/icons/icon-video.png")} resizeMode={'contain'}/>) :(null)}
          {item.hasAudio==1? (<SmallIcon as={Animated.Image} source={require("../../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'}/>) :(null)}
      </InformationWrapper > 

      <ReactionWrapper as={Animated.View} style={ReactionStyle}>
        <Upvote id={item.id} count={9999} size={20}/>
        <Bookmark id={item.id} size={16}/>
      </ReactionWrapper>

      <ItemNumberWrapper as={Animated.View} style={itemNumberStyle}>
        <ItemNumber as={TouchableOpacity} onPress={()=>{
          openCard(index);
        }}>
          <ItemDot as={Animated.View} style={itemDotStyle}/>
          <ItemNumberText>0{index+1}</ItemNumberText>
        </ItemNumber>
      </ItemNumberWrapper>
      

    </CardContainer>
  );
}