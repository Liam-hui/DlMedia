import React, {useState, useEffect, useRef, createRef} from 'react';
import {View,ScrollView} from 'react-native';
import {
  MenuColumn,
  CategeryText,
} from './styles';
import ArticlesListHalf from "@/components/ArticlesListHalf";
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

export default function BookmarkList(props) {

  const {items,bookmarkListRef} = props;

  return (
    <>
      <View style={{flexDirection:'row',marginTop:20,marginBottom:8}}>
        <CategeryText>bookmark</CategeryText>
      </View>
      
      <View style={{flex:1,flexDirection:'row',marginBottom:80}}>
        <MenuColumn style={{backgroundColor:'#00000055'}}>
          <NativeViewGestureHandler
            ref={bookmarkListRef}
            minDeltaY={60}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <ArticlesListHalf items={items}/>
            </ScrollView>
          </NativeViewGestureHandler>
        </MenuColumn>
      </View>
    </>
  );
}



