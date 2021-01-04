import React, {useState, useEffect, useRef, createRef} from 'react';
import { useSelector } from 'react-redux';
import {Dimensions, StatusBar, View, Text, TouchableOpacity, StyleSheet,Platform} from 'react-native';
import { 
  Tab,
  TopRow,
} from './styles';
import PopUpPage from '../PopUpPage';
import People from '../People';
import Vision from '../Vision';
import Menu from '../Menu';

import External from '../External';
import LogoBar from '@/components/LogoBar';
import MemberIcon from '@/components/MemberIcon';

import Animated,{
  useSharedValue,
  useAnimatedRef,
  useAnimatedReaction,
  withTiming,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  Extrapolate,
  Easing,
  set,
  scrollTo,
  runOnJS
} from "react-native-reanimated";
import {
    PanGestureHandler,
    NativeViewGestureHandler,
    State, 
    Directions
  } from 'react-native-gesture-handler'

const SCREEN_WIDTH = Math.round(Dimensions.get('screen').width);

function Main(props){  
  
  const [currentPage,setCurrentPage] = useState(0);

  // const [tabOn,setTabOn] = useState(true);
  // const tabWaitForRef = useSelector(state => state.tabWaitForRef);

  const tabRef = createRef();

  const visionRef = createRef();
  const visionCardRef = createRef();
  const visionScrollViewRef = useAnimatedRef();

  const peopleRef = createRef();
  const peopleScrollViewRef = useAnimatedRef();

  const externalRef = createRef();

  const DIRECTION_STOP = 0;
  const DIRECTION_RIGHT = -1;
  const DIRECTION_LEFT = 1;
  const DIRECTION_DISABLE = -100;

  let activeIndex = useSharedValue(0);
  let translationX = useSharedValue(0);
  let direction = useSharedValue(DIRECTION_STOP);
  let finalDirection = useSharedValue(DIRECTION_STOP);
  // let tabOn = useSharedValue(true);
  // let scrollAnimate = useSharedValue(0);

  // const setTabOn = (value) => {
  //   tabOn.value = value;
  // }

  // useDerivedValue(() => {
  //   runOnJS(setCurrentPage)(activeIndex.value);
  //   console.log(activeIndex.value);
  //   return activeIndex.value;
  // },);

  // useAnimatedReaction(
  //   () => {
  //     return activeIndex.value;
  //   },
  //   (activeIndex) => { 
  //     // runOnJS(setCurrentPage)(activeIndex);
  //   }
  // );


  let pages = [];

  if(Platform.OS==='android') pages = [
    <Vision visionRef={visionRef} visionCardRef={visionCardRef} visionScrollViewRef={visionScrollViewRef} tabRef={tabRef}/>,   
    <People peopleRef={peopleRef} peopleScrollViewRef={peopleScrollViewRef} tabRef={tabRef}/>,
    <Tab/>,
  ]
  else if(Platform.OS==='ios') pages = [
    <Vision visionRef={visionRef} visionCardRef={visionCardRef} visionScrollViewRef={visionScrollViewRef}  tabRef={tabRef}/>,   
    <People peopleRef={peopleRef} peopleScrollViewRef={peopleScrollViewRef} tabRef={tabRef}/>,
    <External/>,
  ]

  let tabs = [];
  for(let i=0;i<pages.length;i++){
    tabs.push(
      <Tab>
        {pages[i]}
      </Tab>
    );
  }

  const length = pages.length;
  const translationX_max = 0;
  const translationX_min = - (length-1)*SCREEN_WIDTH;

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translationX.value;
      direction.value = DIRECTION_STOP;
      finalDirection.value = DIRECTION_STOP;
    },
    onActive: (event, ctx) => {
      if(direction.value == DIRECTION_STOP){
        // console.log(event.velocityX,event.velocityY);
        if(Math.abs(event.velocityX)<Math.abs(event.velocityY)) {
          direction.value = DIRECTION_DISABLE;
        }
        else if(Math.abs(event.velocityX)>Math.abs(event.velocityY)) {
          if(activeIndex.value>0 && event.translationX>0) direction.value = DIRECTION_LEFT;
          else if(activeIndex.value<length-1 && event.translationX<0) direction.value = DIRECTION_RIGHT;
        }
      }

      if(direction.value == DIRECTION_RIGHT || direction.value == DIRECTION_LEFT) {
        let newValue = ctx.startX + event.translationX;
        if(newValue<translationX_min) newValue = translationX_min;
        else if(newValue>translationX_max) newValue = translationX_max;
        translationX.value = newValue;
      }
      
      if(event.velocityX>0) finalDirection.value = DIRECTION_LEFT;
      else if( event.velocityX<0) finalDirection.value = DIRECTION_RIGHT;
    },
    onEnd: (_, ctx) => {
      if(direction.value == DIRECTION_RIGHT || direction.value == DIRECTION_LEFT) {
        if(finalDirection.value==direction.value){
          activeIndex.value = activeIndex.value - direction.value;
        }
        let target = -activeIndex.value*SCREEN_WIDTH;

        const animateSetting = {
          duration: 600 * Math.abs(translationX.value-target)/SCREEN_WIDTH,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        };

        translationX.value = withTiming(target, animateSetting);

      }   
    },
  });

  const tabStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });

  const externalStyle = useAnimatedStyle(() => {
    const translateX = interpolate(Math.abs(translationX.value), [0,SCREEN_WIDTH,2*SCREEN_WIDTH], [0,SCREEN_WIDTH,0], Extrapolate.CLAMP);
    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });

  const scrollAnimate = useSharedValue(0);
  
  const scrollToTop = () => {
    // switch(activeIndex.value) {
    //   case 0:
    //     visionScrollViewRef.current.scrollTo({y:0,animated: true});
    //     break;
    //   case 1:
    //     peopleScrollViewRef.current.scrollTo({y:0,animated: true});
    //     break;
    // }
    scrollAnimate.value = (scrollAnimate.value+1)%10;
  }

  useAnimatedReaction(
    () => {
      return scrollAnimate.value;
    },
    (scroll) => { 
      if(activeIndex.value==0) scrollTo(visionScrollViewRef, 0, 0, true);
      else if(activeIndex.value==1) scrollTo(peopleScrollViewRef, 0, 0, true);
    }
  );



  return (
    <>
      {/* <StatusBar translucent backgroundColor={'transparent'} /> */}

      <PanGestureHandler
        ref={tabRef}
        enabled={true}
        shouldCancelWhenOutside={false}
        onGestureEvent={onGestureEvent}
        // simultaneousHandlers={[visionRef]}
        minDeltaX={50}
        // waitFor={tabWaitForRef.filter(x=>x.current!=null)}
        // waitFor={[visionRef,visionCardRef]}
      >

        <Animated.View style={{flex:1}}>

          {Platform.OS==='android'? (
            <Tab as={Animated.View} style={[{position:'absolute'},externalStyle]}>
              <External/>
            </Tab>
          ):(null)}

          <Animated.View style={[{flexDirection:'row'},tabStyle]}>
            {tabs}
          </Animated.View>

        </Animated.View>
      </PanGestureHandler>


      <TopRow>

        <LogoBar
          position={translationX}
          positionMax={-translationX_min}
          length={3}
          scrollToTop={scrollToTop}
        />
      
        <MemberIcon/>

      </TopRow>
     

      <Menu
        position={translationX}
        positionMax={-translationX_min}
      />

      <PopUpPage/>
      
    </>
  )

};

export default Main;

