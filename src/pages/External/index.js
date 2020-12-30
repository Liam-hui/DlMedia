import React, {useState, useEffect, useRef, createRef} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { StyledWebView } from './styles';
import { WebView } from 'react-native-webview';

import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TouchableOpacity 
} from 'react-native-gesture-handler';
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

const SCREEN_WIDTH = Math.round(Dimensions.get('screen').width);

function External(props) {

  return (
    <Animated.View style={{flex:1}}>

        <NativeViewGestureHandler
        // ref={webViewRef} 
        ref={props.thisRef}
      >
        <StyledWebView as={WebView} source={{ uri: 'https://demo.solutionforest.net/chronicle' }}/> 

      </NativeViewGestureHandler>
            
    </Animated.View>
  );
}

export default External;
