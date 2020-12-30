import React, { useState, useEffect, createRef } from 'react';
import { Services } from '@/services/';
import store from '@/store';
import { StyledContainer, StyledTitle, StyledScrollView } from './styles';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

import SepLine from "@/components/SepLine";

import VisionCards from "./VisionCards";
import VisionLatest from "./VisionLatest";
import VisionHot from "./VisionHot";
import VisionSpotlights from './VisionSpotlights';
import Adv from "@/components/Adv";


function Vision(props) {

  const [keyItems,setKeyItems] = useState([]);
  const [content,setContent] = useState([]);

  const scrollRef = createRef();

  useEffect(() => {
    Services.get('visions/',(data)=>setKeyItems(data.data));
    addContent(data);
  }, []);

  const addContent = (data) => {
    let content = []; 

    data.forEach(block=>{
      switch(block.type) {
        case 'latest':
          content.push(
            <>
              <View style={{width:'100%',marginTop:20,marginBottom:10,paddingLeft:20,paddingRight:5}}>
                  <SepLine title={'latest articles'}/>
              </View>
              <VisionLatest/>
            </>
          );
        break;
        case 'hot':
          content.push(
            <>
              <View style={{width:'100%',marginVertical:20,paddingLeft:20,paddingRight:5}}>
                  <SepLine title={'hot topic'}/>
              </View>
              <VisionHot/>
            </>
          );
        break;
        case 'spotlights':
          content.push(
            <>
              <View style={{width:'100%',marginVertical:20,paddingLeft:20,paddingRight:5}}>
                  <SepLine title={'spotlights'}/>
              </View>
              <VisionSpotlights/>
            </>
          );
        break;
        case 'sponsored':
        content.push(
          <>
            <View style={{width:'100%',marginVertical:20,paddingLeft:20,paddingRight:5}}>
                <SepLine title={'sponsored'}/>
            </View>
            <Adv/>
          </>
        );
      break;
      }
    });
    setContent(content);
  }


  return (
    <StyledContainer>
      <NativeViewGestureHandler
        // ref={(ref)=>{
        //   scrollRef.current = ref;
        //   store.dispatch({type:'TAB_ADD_REF',ref:ref})
        // }}
        ref={props.visionRef}
        minDeltaY={60}
      >
        <ScrollView showsVerticalScrollIndicator={false} >
          {keyItems.length>0?(
            <VisionCards visionCardRef={props.visionCardRef} tabRef={props.tabRef} scrollRef={props.visionRef} items={keyItems} mode={'vision'}/>
          ):(null)}
          {content}
        </ScrollView>

      </NativeViewGestureHandler>
    </StyledContainer>
  );
}


         {/* <BlockArticlesVerticalWide/> */}

          {/* <NewArticleBlock
            items={keyItems}
            // goToDetail={goToDetail}
          /> */}
          
          {/* <SliderBlock
            items={sliderItems}
            goToDetail={goToDetail}
            title={'網絡熱話'}
            scrollRef={props.sliderRef}
          />

          <Adv/>

          <QuoteBlock
            pic={require("../../../assets/images/quote_icon.png")}
          />

          <ContactBlock/> */}

export default Vision;

const data = [
  {
    type:'latest',
  },
  {
    type:'hot',
  },
  {
    type:'sponsored',
  },
  {
    type:'latest',
  },
  {
    type:'spotlights',
  },
]