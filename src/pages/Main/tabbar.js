import React, {useState} from 'react';
import {Dimensions, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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
import { TabbarWrapper, TabbarDot, LogoWrapper, LogoText, TabbarDotPlacement } from './styles';
import DlLogo from '@/components/DlLogo';

const TabBar = (props) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);
  const outputRange = props.navigationState.routes.map((x, i) => 25*i);
  const colorOutputRange = props.navigationState.routes.map((x, i) => x.color);
  const index = props.navigationState.index

  let leftAnimate = Animated.interpolateNode(props.position.current,{
    inputRange,
    outputRange
  })

  console.log(props.position);
  // console.log(logoColor)
  return (
    <TabbarWrapper >
      {/* <Text style={{position:'absolute',top:50}}></Text> */}
      {props.navigationState.routes.map((route, i) => {
        // console.log(props)

        let dot = <TabbarDotPlacement key={`tab-bar-item-${i}`} />
        if(index != i){
          dot = <TabbarDot key={`tab-bar-item-${i}`} as={Animated.View}/>
        }
        return (
          dot
        );
      })}
      <LogoWrapper as={Animated.View} style={{left:leftAnimate}}>
        <DlLogo color={props.navigationState.routes[index].color}/>
        <LogoText>電笠{index}</LogoText>
      </LogoWrapper>
    </TabbarWrapper>
  );
}


export default TabBar;
