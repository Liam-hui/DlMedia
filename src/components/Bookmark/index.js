import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { View, TouchableOpacity, Image,Text } from 'react-native';
import store from '@/store';

export default function Bookmark(props) {

  const {id,size} = props;

  const bookmarks = useSelector(state => state.bookmarks);
  
  return (
    <TouchableOpacity activeOpacity={1} style={{padding:size*0.3}} onPress={()=>store.dispatch({type:'SET_BOOKMARK',id:id})}>
      <Image source={bookmarks.findIndex(bookmark => bookmark.id == id) != -1? (require("../../../assets/images/icons/icon-bookmarked.png")):(require("../../../assets/images/icons/icon-bookmark.png"))} style={{height:size,width:size}} resizeMode={'contain'}/>
    </TouchableOpacity> 
  );
}
