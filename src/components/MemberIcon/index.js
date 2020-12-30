import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'

import { 
    PicWrapper,
} from './styles';
import SepLine from "@/components/SepLine";

export default function MemberIcon({width}) {

    const pic = require("../../../assets/images/member-icon.png");
    const pic_width = width? width:40;
       
    return (
        <PicWrapper style={{width:pic_width,height:pic_width,borderRadius:pic_width*0.5}}>
            <Image 
                resizeMode={"cover"} 
                source={pic} 
                style={{width:'100%', height:'100%'}}
            />
        </PicWrapper>
    );
}
  