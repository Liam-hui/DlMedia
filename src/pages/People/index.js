import React, { useState, useEffect, createRef } from 'react';
import { StyledContainer, StyledTitle, StyledScrollView } from './styles';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

import Animated,{
  useSharedValue,
  withTiming,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  useAnimatedReaction,
  Extrapolate,
  Easing,
} from "react-native-reanimated";

import PeopleCard from "./PeopleCard";
import PeopleList from "./PeopleList";

const PEOPLE_CARD_HEIGHT = Math.round(Dimensions.get('window').height)*0.9;

function People(props) {;

  const items = [
    {
      index:0,
      posters:[
        require("../../../assets/images/juno-mak-4.png"),
        require("../../../assets/images/loan-4.png"),
      ],
      bgColor:"#215471",
      title:"發夢・香水・黑灰白",
      name:"麥浚龍",
      date:"5 May 2020",
      duration:"3 分鐘",
      goodRank:"762",
      id:"1",
      hasVideo:1,
      hasAudio:1,
    },
    {
      visual:require("../../../assets/images/sammy.png"),
      bgColor:"#E7E7E7",
      title:"封咪・手錶・煮飯仔",
      name:"森美",
      date:"5 May 2020",
      duration:"3 分鐘",
      goodRank:"562",
      id:"2"
    },
    {
      visual:require("../../../assets/images/juno-mak-4.png"),
      bgColor:"#215471",
      title:"發夢・香水・黑灰白",
      name:"麥浚龍",
      date:"5 May 2020",
      duration:"3 分鐘",
      goodRank:"762",
      id:"3"
    },
    {
      visual:require("../../../assets/images/sammy.png"),
      bgColor:"#E7E7E7",
      title:"封咪・手錶・煮飯仔",
      name:"森美",
      date:"5 May 2020",
      duration:"3 分鐘",
      goodRank:"562",
      id:"4"
    }
  ]

  const contentItems = [
    {
      id:"m1",
      image:'https://yiuonapp.itisdemo.com/album/photo/2010?full=y'
    },
    {
      id:"m6",
      image:'https://yiuonapp.itisdemo.com/album/photo/2016?full=y'
    },
    {
      id:"m2",
      image:'https://yiuonapp.itisdemo.com/album/photo/2012?full=y'
    },
    {
      id:"m3",
      image:'https://yiuonapp.itisdemo.com/album/photo/2013?full=y'
    },
    {
      id:"m4",
      image:'https://yiuonapp.itisdemo.com/album/photo/2014?full=y'
    },
    {
      id:"m5",
      image:'https://yiuonapp.itisdemo.com/album/photo/2015?full=y'
    },

    {
      id:"m7",
      image:'https://yiuonapp.itisdemo.com/album/photo/2011?full=y'
    }
  ]

  let peopleScroll= useSharedValue(0);
  let scrollPosition= useSharedValue(0);

  const handleScroll = (event) => {
    scrollPosition.value = event.nativeEvent.contentOffset.y;
    peopleScroll.value = event.nativeEvent.contentOffset.y-PEOPLE_CARD_HEIGHT;
  };

  return (
    <StyledContainer>
      <NativeViewGestureHandler
        ref={props.peopleRef}
      >
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={50}  onScroll={handleScroll}>
          <PeopleCard active={props.active} item={items[0]}/>

          <PeopleList
            items={contentItems}
            scroll={peopleScroll}
          />

        </ScrollView>
      </NativeViewGestureHandler>
    </StyledContainer>
  );
}

export default People;
