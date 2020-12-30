import React, {useState, useEffect, useRef, createRef} from 'react';
import store from '@/store';
import storage from '@/utils/storage';
import { Services } from '@/services/';
import {Dimensions, Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView,ScrollView,Platform} from 'react-native';
import { BlurView } from "@react-native-community/blur";
import MaskedView from '@react-native-community/masked-view';
import {
  SmallInfoWrapper,
  MonthText,
  DateText,
  DayText,
  ListIcon,
  MenuColumn,
  CategeryText,
} from './styles';

import Svg, {
  G,
  Defs,
  Path,
  Mask,
} from 'react-native-svg';
import Animated,{
  useSharedValue,
  withTiming,
  withSpring,
  runOnJS,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  Extrapolate,
  Easing,
} from "react-native-reanimated";
import {
    PanGestureHandler,
    NativeViewGestureHandler,
    State, 
    Directions
  } from 'react-native-gesture-handler'
import SepLine from "@/components/SepLine";
import ArticlesListHalf from "@/components/ArticlesListHalf";

const DIRECTION_STOP = 0;
const DIRECTION_OPEN = -1;
const DIRECTION_CLOSE = 1;
const DIRECTION_DISABLE = -10;
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

export default function Menu(props) {

  const {position,positionMax} = props;
  const [bookmarkItems,setBookmarkItems] = useState([]);

  useEffect(() => {
    getBookmarked();
  }, []);

  const getBookmarked = async() => {
    // let bookmarked = await storage.getAllBookmarked();
    // let data = bookmarked.map(bookmark=>{
    //   Services.getDetailById(bookmark.id);
    //   return {id:bookmark.id,loading:true};
    // })
    // setBookmarkItems(bookmarked.map(bookmark=>({id:bookmark.id,loading:true}));

    Services.get('visions/',(data)=>setBookmarkItems(data.data));
  }

  const articleRef = createRef();

  let translationX = useSharedValue(0);
  let direction = useSharedValue(DIRECTION_STOP)

  let leftMax= useSharedValue(0);

  const length = 3;
  const smallContentStyle = useAnimatedStyle(() => {
    let translationY = interpolate(Math.abs(position.value),[0,positionMax], [0,70*(length-1)], Extrapolate.CLAMP);
    return {
      transform: [
        {
          translateY: -translationY
        },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
      onStart: (_, ctx) => {
        ctx.startX = translationX.value;
        direction.value = DIRECTION_STOP;
        leftMax.value = 0;
      },
      onActive: (event, ctx) => {
        console.log('eee');
        if(direction.value == DIRECTION_STOP && Math.abs(event.velocityY)>Math.abs(event.velocityX) ) direction.value = DIRECTION_DISABLE;
        if(direction.value != DIRECTION_DISABLE) {
          if(ctx.startX == -SCREEN_WIDTH && event.translationX < leftMax.value){
            leftMax.value = event.translationX;
          }
          translationX.value = ctx.startX + event.translationX - leftMax.value;
          if(translationX.value<-SCREEN_WIDTH) translationX.value = -SCREEN_WIDTH;
          
          if(event.velocityX<0) direction.value = DIRECTION_OPEN;
          else if(event.velocityX>0) direction.value = DIRECTION_CLOSE;
        }
      },
      onEnd: (_, ctx) => {
        if(direction.value != DIRECTION_DISABLE){
          let target = 0;
          if(direction.value == DIRECTION_STOP) target = ctx.startX;
          else if(direction.value == DIRECTION_OPEN) {
            target = -SCREEN_WIDTH;
            runOnJS(getBookmarked)();
          }

          const animateSetting = {
            duration: 500 *  Math.abs(translationX.value-target)/SCREEN_WIDTH,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          };

          translationX.value = withTiming(target, animateSetting, (completed)=>{

          });
        }
      },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });

  const menuButtonOffset = 98;

  const MenuArea = () => {
    if(Platform.OS==='ios') return(
      <View style={{flexDirection:'row'}}>
        <Svg style={{marginRight:-80,marginTop:80}} width="178" height="116.003" viewBox="0 0 178 116.003">
          <G transform="matrix(1, 0, 0, 1, 0, 0)">
            <Path 
              d="M7227,8056h-35a35,35,0,1,1,0-70h30.028A27.977,27.977,0,0,0,7250,7958v98h-23Zm-59-40a4,4,0,1,0,4,4A4,4,0,0,0,7168,8016Z" 
              transform="translate(-7148 -7952)" 
              fill="black" 
            />
          </G>
        </Svg>
        <View style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT,backgroundColor:'black'}}/>
      </View>
    );
    else if(Platform.OS==='android') return(
      <Svg style={{marginRight:-80,marginTop:80}} width="178" height="116.003" viewBox="0 0 178 116.003">
        <G transform="matrix(1, 0, 0, 1, 0, 0)">
          <Path 
            d="M7227,8056h-35a35,35,0,1,1,0-70h30.028A27.977,27.977,0,0,0,7250,7958v98h-23Zm-59-40a4,4,0,1,0,4,4A4,4,0,0,0,7168,8016Z" 
            transform="translate(-7148 -7952)" 
            fill="rgba(0,0,0,0.6)" 
          />
        </G>
      </Svg>
    );
  }

  const SmallMenuContent = (
      <Animated.View style={[{position:'absolute',flexDirection:'row',left:-85,top:115,width:85,height:70,overflow:'hidden'}]}>
        <Animated.View style={smallContentStyle}>
          <SmallInfoWrapper>
            <View style={{alignItems:'center',width:50}}>
              <MonthText>四月</MonthText>
              <DateText>22</DateText>
              <SepLine width={3}/>
              <DayText>sunday</DayText>
            </View>
            <Image source={require("../../../assets/images/icons/icon-weather-cloud.png")} resizeMode={"contain"}  style={{height:18,width:18,opacity:0.7,marginLeft:-5,marginRight:3,marginTop:3}}/>
          </SmallInfoWrapper>

          <SmallInfoWrapper>
            <View style={{alignItems:'center',width:65,marginRight:5}}>
              <Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={"contain"} style={{height:18,width:18,opacity:0.7,marginBottom:5}}/>
              <SepLine width={3}/>
              <DayText style={{marginTop:3}}>soundbite</DayText>
            </View>
          </SmallInfoWrapper>

        </Animated.View>
      </Animated.View>
  )

  const PopUpPageButton = (mode,icon) => (
      <TouchableOpacity onPress={()=>{
        translationX.value = withTiming(0, {duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1)});
        store.dispatch({type:'POP_UP_PAGE_ON',mode:mode});
      }}>
        <ListIcon source={icon} resizeMode={"contain"} />
      </TouchableOpacity>
    );

  const largeMenuContent = (
    <Animated.View style={[{position:'absolute',width:SCREEN_WIDTH,height:SCREEN_HEIGHT,flexDirection:'row',alignItems:'center'}]}>
      <View style={{marginHorizontal:25}}>
        {PopUpPageButton('search',require("../../../assets/images/icons/icon-search.png"))}
        {PopUpPageButton('notification',require("../../../assets/images/icons/icon-notification.png"))}
        {PopUpPageButton('calendar',require("../../../assets/images/icons/icon-calendar.png"))}
        {PopUpPageButton('history',require("../../../assets/images/icons/icon-history.png"))}
      </View>

      <SafeAreaView style={{height:'100%',flex:1}}>
        <View style={{flexDirection:'row',marginTop:20,marginBottom:8}}>
          <CategeryText>bookmark</CategeryText>
        </View>
        <View style={{flex:1,flexDirection:'row',marginBottom:80}}>
          <MenuColumn style={{backgroundColor:'#00000055'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ArticlesListHalf items={bookmarkItems}/>
            </ScrollView>
          </MenuColumn>
          {/* <MenuColumn style={{backgroundColor:'#00000099'}}/> */}
        </View>

      </SafeAreaView>
    </Animated.View>
  );
    

  return (
    <>
      <Animated.View style={[{position:'absolute',width:SCREEN_WIDTH,height:SCREEN_HEIGHT,left:SCREEN_WIDTH},animatedStyle]}> 
      
        {Platform.OS==='android'? (
          <>
          <View style={{position:'absolute',width:menuButtonOffset+SCREEN_WIDTH,height:SCREEN_HEIGHT,left:-menuButtonOffset}}>
            <MenuArea/>
          </View>
          <View style={{position:'absolute',width:SCREEN_WIDTH,height:SCREEN_HEIGHT,overflow:'hidden'}} >
            <BlurView blurType="dark" blurAmount={15} style={{flex:1}}/>
          </View>  
          </>
        ):(null)}

        {Platform.OS==='ios'? (
          <MaskedView
            pointerEvents="none"
            style={{position:'absolute',width:menuButtonOffset+SCREEN_WIDTH,height:SCREEN_HEIGHT,left:-menuButtonOffset}}
            maskElement={
              <MenuArea/>
            }
          >
            <BlurView blurType="dark" blurAmount={15} style={{flex:1}}/>
          </MaskedView>  
        ):(null)}
        
        <PanGestureHandler
          shouldCancelWhenOutside={false}
          onGestureEvent={onGestureEvent}
        >
          {SmallMenuContent}
        </PanGestureHandler>

        <PanGestureHandler
          shouldCancelWhenOutside={false}
          onGestureEvent={onGestureEvent}
          simultaneousHandlers={[articleRef]}
        >
          {largeMenuContent}
        </PanGestureHandler>

      </Animated.View>
    </>
  );
}


// const articleItems = [
//   {
//     visual:require("../../../assets/images/article1.png"),
//     bgColor:"#215471",
//     type:"machine",
//     title:"貓狗可以不吃肉嗎？\n蟋蟀是新出路",
//     name:"perpetual",
//     tag:"#貓  ＃蟋蟀",
//     date:"5 May 2020",
//     duration:"3 分鐘",
//     goodRank:"762",
//     id:"1"
//   },
//   {
//     visual:require("../../../assets/images/article2.png"),
//     bgColor:"#E7E7E7",
//     type:"machine",
//     title:"為什麼德國必需率先實行「工業 4.0呢」?",
//     name:"森美",
//     name:"perpetual",
//     tag:"#貓  ＃蟋蟀",
//     date:"5 May 2020",
//     duration:"3 分鐘",
//     goodRank:"562",
//     id:"2"
//   },
//   {
//     visual:require("../../../assets/images/article3.png"),
//     bgColor:"#215471",
//     type:"machine",
//     title:"發夢・香水・黑灰白",
//     name:"麥浚龍",
//     name:"perpetual",
//     tag:"#貓  ＃蟋蟀",
//     date:"5 May 2020",
//     duration:"3 分鐘",
//     goodRank:"762",
//     id:"3"
//   },
// ]

