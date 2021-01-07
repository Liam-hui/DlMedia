import React, {useState, useEffect, useRef, createRef} from 'react';
import {View,TouchableOpacity} from 'react-native';
import store from '@/store';
import {
  ListIcon
} from './styles';

export default function ButtonList(props) {

  const MenuButton = (mode,icon) => (
    <TouchableOpacity onPress={()=>{
      props.closeMenu();
      store.dispatch({type:'POP_UP_PAGE_ON',mode:mode});
    }}>
      <ListIcon source={icon} resizeMode={"contain"} />
    </TouchableOpacity>
  );

  return (
    <>
      {MenuButton('search',require("../../../assets/images/icons/icon-search.png"))}
      {/* {MenuButton('notification',require("../../../assets/images/icons/icon-notification.png"))}
      {MenuButton('calendar',require("../../../assets/images/icons/icon-calendar.png"))} */}
      {MenuButton('history',require("../../../assets/images/icons/icon-history.png"))}
  </>
  );
}



