import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Services } from '@/services/';

import {
  StyledContainer,
  VoteCount,
} from './styles';

export default function Upvote(props) {

  const {id,size,color} = props;

  const [count,setCount] = useState([]);

  useEffect(() => {
    setCount(props.count);
  }, []);

  const upvoteAction = () => {
    setCount(count+1);
    // Services.
  }

  const downvoteAction = () => {
    setCount(count-1);
  }
  
  return (
    <StyledContainer>
      <TouchableOpacity activeOpacity={1} style={{paddingVertical:size*0.2,paddingLeft:size*0.2}} onPress={upvoteAction}>
        <Image source={require("../../../assets/images/icons/icon-upvote.png")} resizeMode={'contain'} style={{width:size,height:size,marginRight:0}}/>
      </TouchableOpacity>

      <VoteCount style={{color:color?color:'white',fontSize:size*0.7,width:size*1.7}}>{count>9999? Math.round(count/1000)+'k' : count}</VoteCount>
      
      <TouchableOpacity activeOpacity={1} style={{paddingVertical:size*0.2,paddingRight:size*0.2}} onPress={downvoteAction}>
        <Image source={require("../../../assets/images/icons/icon-downvote.png")} resizeMode={'contain'} style={{width:size,height:size,marginLeft:0}}/>
      </TouchableOpacity> 

    </StyledContainer>
  );
}
