import React, {useState, useEffect} from 'react';
import {Text,View,Image,TouchableOpacity,Dimensions } from "react-native";
import {
  CardContainer,
  StyledItemBackgroundImage,
  GradientWrapper,
  LeftBlack,
  OptionWrapper,
  InformationWrapper ,
  InformationText,
  ArticleTitle,
  BeforeTitle,
  ArticleTag,
  ArticleTitleWrapper,
  PendingBackground,
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
import { opacity } from 'react-native-redash';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const VISUAL_HEIGHT = Math.round(SCREEN_HEIGHT*0.8);
const VISUAL_MIN_HEIGHT = 29;

const maxAmount = VISUAL_HEIGHT - VISUAL_MIN_HEIGHT;
const TITLE_RIGHT_SPACE = 88;

export default function Card(props) {
  const {item, index, mode, activeIndex, amount, animating, direction, openCard, openingCard} = props;

  const [lines,setLines] = useState([]);
  let titleHeight = useSharedValue(30);
  let titleOtherHeight = useSharedValue(0);
  const [titleOther,setTitleOther] = useState([]);

  useEffect(() => {
    let titleOther = [];
    lines.forEach((line,index)=>{
      if(index>0&&line.text) titleOther.push(
        <ArticleTitle numberOfLines={1} style={titleLargeStyle}>{line.text}</ArticleTitle>
      );
    });
    setTitleOther(titleOther);
    if(lines.length>0){
      titleHeight.value = lines[0].height;
      titleOtherHeight.value = (lines.length-1)*lines[0].height;
    }
  }, [lines]);


  const animatedStyle = useAnimatedStyle(() => {
    let min_height = VISUAL_HEIGHT;
    if(index<activeIndex.value || ( index==activeIndex.value && !animating.value && direction.value==-1) || ( index==activeIndex.value && animating.value && direction.value==1) ) min_height = 0;
    let height = interpolate(amount.value,[0,maxAmount], [min_height,VISUAL_HEIGHT], Extrapolate.CLAMP);
    return {
      height: height,
      top: index*VISUAL_MIN_HEIGHT,
    }
  });

  let titleDefaultPosition = {left:80,bottom:-35}

  const titlePosition = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [titleDefaultPosition.bottom,42], Extrapolate.CLAMP)
    const left = interpolate(amount.value, [0,maxAmount], [titleDefaultPosition.left,80], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      // left:left,
      left:titleDefaultPosition.left
    }
  })  

  const titleLargeScale = 1;
  const titleSmallScale = 0.464;
  const iconWidth = 58;

  const titleLargeStyle = {
    width: (SCREEN_WIDTH - 80 - iconWidth) /titleLargeScale,
  }

  const titleStyle = useAnimatedStyle(()=>{
    const scale = interpolate(amount.value, [0,maxAmount], [titleSmallScale, titleLargeScale], Extrapolate.CLAMP)
    const width = (SCREEN_WIDTH - titleDefaultPosition.left - TITLE_RIGHT_SPACE)/titleSmallScale;
    const translateX = width*(scale-1)*0.5/scale;

    return {
      transform: [{scale:scale},{translateX:translateX },{translateY:titleHeight.value*(scale-1)*0.5/scale}],
      width:width,
      height:(titleHeight.value+4)*scale,
    }
  })

  const titleOldStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [1, -1.1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      position:'absolute',
      width:'100%',
    }
  })

  const titleNewStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1.7], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      position:'absolute',
    }
  })

  const titleOtherStyle = useAnimatedStyle(()=>{
    const scale = interpolate(amount.value, [0,maxAmount], [titleSmallScale, titleLargeScale], Extrapolate.CLAMP)
    const width = SCREEN_WIDTH - titleDefaultPosition.left - TITLE_RIGHT_SPACE;

    const finalTranslateY = titleOtherHeight.value*(scale-1)*0.5/scale;
    const translateY = interpolate(amount.value, [0,maxAmount], [-30, finalTranslateY], Extrapolate.CLAMP)

    return {
      transform: [{scale:scale},{translateX:width*(scale-1)*0.5/scale},{translateY:-translateY}],
      width:width,
      // overflow:'hidden',
    }
  })

  const titleOtherContainerStyle = useAnimatedStyle(()=>{
    const height = interpolate(amount.value, [0,maxAmount], [0, titleOtherHeight.value*titleLargeScale], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [-0.3, 1], Extrapolate.CLAMP)
    return {
      height:height,
      justifyContent:'flex-end',
      opacity:opacity,
      // marginTop:10,
    }
  })

  const otherPosition = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [-50, 16], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [-0.3, 1], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      opacity:opacity,
    }
    // return{}
  })

  const optionPosition = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [0,16], Extrapolate.CLAMP)
    return {
      bottom:bottom,
    }
    // return{}
  })

  const itemDotStyle = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [8, -300], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [1, 0], Extrapolate.CLAMP)
    const scale = interpolate(amount.value, [0,maxAmount], [1, 0], Extrapolate.CLAMP)
    return {
      opacity:opacity,
      bottom:8,
      transform: [{scale:scale}],
    }
    // return{}
  })

  const itemNumberStyle = useAnimatedStyle(()=>{
    let pos = VISUAL_HEIGHT-30;
    if(index<activeIndex.value || ( index==activeIndex.value && !animating.value && direction.value==-1) || ( index==activeIndex.value && animating.value && direction.value==1) ) pos = -10;
    const top = interpolate(amount.value, [0,maxAmount], [pos, 165], Extrapolate.CLAMP)
    const scale = interpolate(amount.value, [0,maxAmount], [0.35, 1], Extrapolate.CLAMP)
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

  const pendingBackground = useAnimatedStyle(()=>{
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

  const picPosition = useAnimatedStyle(()=>{
    const bottom = interpolate(amount.value, [0,maxAmount], [-50, 60], Extrapolate.CLAMP)
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      bottom:bottom,
      opacity:opacity,
    }
    // return{}
  })

  const infoIconStyle = useAnimatedStyle(()=>{
    const size = interpolate(amount.value, [0,maxAmount], [15, 20], Extrapolate.CLAMP)
    return {
      width:size,
      height:size,
    }
  })

  const optionTextStyle = useAnimatedStyle(()=>{
    const size = interpolate(amount.value, [0,maxAmount], [10, 13], Extrapolate.CLAMP)
    return {
      fontSize:size,
    }
  })

  const articleCategoryStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
    }
    // return{}
  })

  const articleTagStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(amount.value, [0,maxAmount], [0, 1], Extrapolate.CLAMP)
    return {
      opacity:opacity,
    }
    // return{}
  })


  return (
     <CardContainer key={item.id} as={Animated.View} style={[{zIndex:10-index},animatedStyle]}> 

      <StyledItemBackgroundImage source={{uri:imagePath(item.poster)}}/>

      <GradientWrapper as={Animated.View} style={gradientStyle}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)']} style={{height:'100%'}}/>
      </GradientWrapper>

      <PendingBackground as={Animated.View} style={pendingBackground}>
        <LinearGradient colors={['rgba(65,65,65,0.55)', 'rgba(13,13,13,0.85)']} start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}} style={{height:'100%',width:'100%'}}/>  
      </PendingBackground>

      <LeftBlack/>

      <VSep as={Animated.View} style={VSepStyle}>
          <SepLine vertical={true} color='white'/>
      </VSep>
      
      <ArticleTitleWrapper as={Animated.View} style={[titleDefaultPosition,titlePosition]}>
        <ArticleTitle onTextLayout={({ nativeEvent: {lines} }) => setLines(lines)}  numberOfLines={3} style={[{position:'absolute',opacity:0},titleLargeStyle]}>{item.title}</ArticleTitle>
        
        <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail',{id:item.id})}>

          <Animated.View style={titleStyle}>
            <ArticleTitle as={Animated.Text} numberOfLines={1} style={titleOldStyle}>{item.title}</ArticleTitle>
            <ArticleTitle as={Animated.Text} numberOfLines={1} style={titleNewStyle}>{lines.length>0?(lines[0].text):(null)}</ArticleTitle>
          </Animated.View>

          <Animated.View style={titleOtherContainerStyle}>
            <Animated.View style={titleOtherStyle}>
              {titleOther}
            </Animated.View>
          </Animated.View>

        </TouchableOpacity>

        <BeforeTitle as={Animated.Text} style={articleCategoryStyle}>asdf</BeforeTitle>
        <ArticleTag as={Animated.Text} style={articleTagStyle}>as</ArticleTag>
  
      </ArticleTitleWrapper>

      <IconWrapper as={Animated.View} style={picPosition}>
        <AuthorIcon pic={item.authorPic} size={70}/>
        <IconText>Vincent Lau</IconText>
      </IconWrapper>

      <InformationWrapper as={Animated.View} style={otherPosition}>
        <InformationText>{date(item.date)}</InformationText>
        <Sep />
        <InformationText>閱讀時間 3</InformationText>
          {item.hasVideo==1? (<SmallIcon as={Animated.Image} source={require("../../../../assets/images/icons/icon-video.png")} resizeMode={'contain'}/>) :(null)}
          {item.hasAudio==1? (<SmallIcon as={Animated.Image} source={require("../../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'}/>) :(null)}
      </InformationWrapper > 

      <OptionWrapper as={Animated.View} style={optionPosition}>
        <Upvote id={item.id} count={9999} size={16}/>
        <Bookmark id={item.id} size={16}/>
      </OptionWrapper>

      <ItemNumber as={Animated.View} style={itemNumberStyle}>
        {/* <ItemNumber as={TouchableOpacity} onPress={()=>{
          openCard(index);
        }}> */}
          <ItemDot as={Animated.View} style={itemDotStyle}/>
          <ItemNumberText>0{index+1}</ItemNumberText>
        {/* </ItemNumber> */}
      </ItemNumber >
      

    </CardContainer>
  );
}
