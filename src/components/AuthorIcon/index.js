import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';

import { 
    PicWrapper,
} from './styles';

export default function AuthorIcon(props) {
    const {group,pic,size} = props;

    let color = 'black';
    switch(group) {
        case 'inhouse':
          color = 'rgb(224,81,81)';
        case 'contributor':
            color = 'rgb(224,81,81)';
        case 'artist':
            color = 'rgb(224,81,81)';
        case 'reader':
            color = 'rgb(224,81,81)';
        case 'quotation':
            color = 'rgb(224,81,81)';
        case 'student':
            color = 'rgb(224,81,81)';
    }

    return (
        <PicWrapper activeOpacity={0.7} style={{borderColor: color,backgroundColor:'black',borderRadius:size*0.5,height:size,width:size}}>
            <Image 
                resizeMode={"cover"} 
                source={pic} 
                style={{width:'100%', height:'100%'}}
            />
        </PicWrapper>
    );
}
  