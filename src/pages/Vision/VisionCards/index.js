import React, {useState, useEffect,useRef,createRef} from 'react';
import {Dimensions, Image, View, ScrollView,TouchableOpacity  } from "react-native";
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
  useAnimatedReaction,
  Extrapolate,
  Easing,
} from "react-native-reanimated";
import {
  StyledContainer,
 } from './styles';
import {
  PanGestureHandler,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import Card from "./Card"
import SepLine from "@/components/SepLine";

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const VISUAL_HEIGHT = Math.round(SCREEN_HEIGHT*0.8);
const VISUAL_MIN_HEIGHT = 29;

const TRANSLATIONY_MAX = VISUAL_HEIGHT - VISUAL_MIN_HEIGHT;

const DIRECTION_STOP = 0;
const DIRECTION_UP = -1;
const DIRECTION_DOWN = 1;
const DIRECTION_DISABLE = -100;

const DURATION = 500;

function VisionCards(props){
  const {items,mode,setTabOn} = props;

  const emptyRef = createRef();
  const [enableTab,setEnableTab] = useState(true);
  const [enableScroll,setEnableScroll] = useState(false);

  let activeIndex = useSharedValue(0);
  let animating = useSharedValue(false);
  let openingCard = useSharedValue(false);
  let enlargeValues = useSharedValue(items.map((item, index)=>{
    if(index==0) return useSharedValue(TRANSLATIONY_MAX)
      else return useSharedValue(0)
  }))
  let marginTop = useSharedValue(0);
  let direction = useSharedValue(DIRECTION_STOP);
  let finalDirection = useSharedValue(DIRECTION_STOP);
 
  const test = (value) => {
    setEnableScroll(value);
  }

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      animating.value = false;
      ctx.marginTop = marginTop.value;
      direction.value = DIRECTION_STOP;
      finalDirection.value = DIRECTION_STOP;
      ctx.enlargeValues = enlargeValues.value.map((item)=>{
        return item.value
      })
    },
    onActive: (event, ctx) => {
      if(direction.value == DIRECTION_STOP){
        if(Math.abs(event.velocityX)>Math.abs(event.velocityY)) {
          direction.value = DIRECTION_DISABLE;
        }
        else if(Math.abs(event.velocityX)<Math.abs(event.velocityY)) {
          if(activeIndex.value<items.length-1 && event.translationY<0) direction.value = DIRECTION_UP;
          else if(activeIndex.value>0 && event.translationY>0) {
            direction.value = DIRECTION_DOWN;
            runOnJS(test)(false);
          }
        }
      }

      if(direction.value == DIRECTION_UP || direction.value == DIRECTION_DOWN) {
        let amount = event.translationY;
        if(direction.value == DIRECTION_UP) {
          if (amount>0) amount = 0;
          amount = Math.abs(amount);
          enlargeValues.value[activeIndex.value+1].value = ctx.enlargeValues[activeIndex.value+1] + amount;
          marginTop.value = ctx.marginTop - amount/TRANSLATIONY_MAX*VISUAL_MIN_HEIGHT;
        }
        if(direction.value == DIRECTION_DOWN) {
          if (amount<0) amount = 0;
          enlargeValues.value[activeIndex.value-1].value = ctx.enlargeValues[activeIndex.value-1] + amount;
          marginTop.value = ctx.marginTop + amount/TRANSLATIONY_MAX*VISUAL_MIN_HEIGHT;
        }
        enlargeValues.value[activeIndex.value].value = ctx.enlargeValues[activeIndex.value] - amount;

      }     

      if(event.velocityY<0) finalDirection.value = DIRECTION_UP;
        else if( event.velocityY>0) finalDirection.value = DIRECTION_DOWN;

    },
    onEnd: (_, ctx) => {
      if(direction.value == DIRECTION_UP || direction.value == DIRECTION_DOWN) {

        let targetMin = 0; 
        let targetMax = TRANSLATIONY_MAX;

        if(finalDirection.value!=direction.value) {
          targetMin = TRANSLATIONY_MAX; 
          targetMax = 0;
        }

        const animateSetting = {
          duration: DURATION * (1 - Math.abs(enlargeValues.value[activeIndex.value].value-targetMax)/TRANSLATIONY_MAX),
          // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        };
      
        enlargeValues.value[activeIndex.value].value = withTiming(targetMin, animateSetting);
        if(direction.value == DIRECTION_UP) enlargeValues.value[activeIndex.value+1].value = withTiming(targetMax, animateSetting);
        if(direction.value == DIRECTION_DOWN) enlargeValues.value[activeIndex.value-1].value = withTiming(targetMax, animateSetting);

        if(finalDirection.value==direction.value) {
          animating.value = true;
          if(direction.value == DIRECTION_DOWN) activeIndex.value = activeIndex.value -1;
          else if(direction.value == DIRECTION_UP) activeIndex.value = activeIndex.value +1;
        } 

        marginTop.value = withTiming(activeIndex.value*(-VISUAL_MIN_HEIGHT),animateSetting);

        if(activeIndex.value==items.length-1) runOnJS(test)(true);
        // if(activeIndex.value==items.length-1) enableScrollAnimate.value = true;
      }     

    },
  });



  const onGestureEventFake = useAnimatedGestureHandler({onStart:() => {},onActive:() => {},onEnd:() => {}});

  const openCard = (index) => {
    openingCard.value = true;

    const animateSetting = {
      duration: DURATION,
      // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    };

    activeIndex.value = index;
    enlargeValues.value[index].value = withTiming(TRANSLATIONY_MAX, animateSetting);
    for(let i=0;i<index;i++){
      if(enlargeValues.value[i].value!=0) {
        console.log('here',i);
        enlargeValues.value[i].value = withTiming(0, animateSetting);
      }
    }
    
    marginTop.value = withTiming(index*(-VISUAL_MIN_HEIGHT),animateSetting);

    setTimeout(()=>openingCard.value=false,DURATION);
  }

  const animatedContainer = useAnimatedStyle(() => {
      return {
        height: VISUAL_HEIGHT+VISUAL_MIN_HEIGHT*(items.length-1),
        marginTop:marginTop.value,
      }
  });

  const renderItem = (item, index)=>{
    const myEnlargeValue = enlargeValues.value[index]

    return (
      <Card
        mode={mode}
        item={item}
        index={index}
        activeIndex={activeIndex}
        amount={myEnlargeValue}
        animating={animating}
        direction={direction}
        openCard={openCard}
        openingCard={openingCard}
      />
    );
  }

  return (
    <>
      {/* <PanGestureHandler simultaneousHandlers={[props.visionCardRef,props.tabRef,enableScroll? props.scrollRef : emptyRef]} onGestureEvent={useAnimatedGestureHandler({onStart:() => {},onActive:() => {},onEnd:() => {}})} >
        <Animated.View> */}
          <PanGestureHandler
            ref={props.visionCardRef}
            // minDeltaY={50} 
            simultaneousHandlers={enableScroll? [props.scrollRef,props.tabRef] : [props.tabRef]}
            shouldCancelWhenOutside={false}
            onGestureEvent={onGestureEvent}
            // waitFor={props.tabRef}
          >
            <StyledContainer as={Animated.View} style={[animatedContainer,{overflow:'hidden'}]}>            
              {items.map((item, index)=>renderItem(item, index))}
            </StyledContainer>

          </PanGestureHandler>
        {/* </Animated.View>
      </PanGestureHandler> */}

    </>
  );
}

export default VisionCards;
