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
import {  
  TabbarWrapper,
  LogoWrapper, 
  LogoTextWrapper,
  LogoText, 
  Dot,
  DotsWrapper,
} from './styles';
import Logo from './Logo';

export default function LogoBar(props){
  const {position,positionMax,length} = props;

  const inputRange = [];
  for(let i=0;i<length;i++){
    inputRange.push(i*positionMax/(length-1) );
  }
  const colorRange = [
    {'r':95,'g':95,'b':255},
    {'r':255,'g':70,'b':99},
    {'r':244,'g':215,'b':50},
  ]
  const logoColor = useDerivedValue(() => {
    let r = interpolate(Math.abs(position.value),inputRange, colorRange.map(x=>x.r), Extrapolate.CLAMP);
    let g = interpolate(Math.abs(position.value),inputRange, colorRange.map(x=>x.g), Extrapolate.CLAMP);
    let b = interpolate(Math.abs(position.value),inputRange, colorRange.map(x=>x.b), Extrapolate.CLAMP);

    return 'rgb(' + r +',' + g +',' + b +')'
  });

  let Dots = [];
  for(let i=0;i<length;i++){
    const dotStyle = useAnimatedStyle(() => {
      let currentDot = interpolate(Math.abs(position.value),[0,positionMax], [0,length-1], Extrapolate.CLAMP);
      let opacity = interpolate(currentDot,[i-1,i,i+1], [0.5,1,0.5], Extrapolate.CLAMP);
      let scale = interpolate(currentDot,[i-1,i,i+1], [1,1.5,1], Extrapolate.CLAMP);
      return {
        opacity: opacity,
        transform: [
          {
            scale: scale,
          },
        ],
      };
    });
    Dots.push(
      <Dot as={Animated.View} style={dotStyle}/> 
    )
  }

  return (
    <TabbarWrapper>

      <LogoWrapper>
        <TouchableOpacity onPress={()=>props.scrollToTop()} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Logo logoColor={logoColor}/>
          <LogoTextWrapper>
            <LogoText style={{marginRight:20}}>電</LogoText>
            <LogoText>笠</LogoText>
          </LogoTextWrapper>
        </TouchableOpacity>
      </LogoWrapper>

      <DotsWrapper>
        {Dots}
      </DotsWrapper>

    </TabbarWrapper>
  );
}


