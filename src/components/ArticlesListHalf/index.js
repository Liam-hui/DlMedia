import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
    StyledItem, 
    Row,
    ItemInfo,
    TypeText,
    TitleText,
    TimeTextWrapper,
    TimeText,
    Sep,
    OptionText,
} from './styles';

import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';
import {imagePath,date,readingTime} from '@/utils/MyUtils';
import * as RootNavigation from '@/utils/RootNavigation';

export default function ArticlesListHalf(props) {

    const {items} = props;
   
    const renderItem = (item,index) => {
        return(
            <StyledItem>
                <Image  
                    resizeMode={"cover"} 
                    source={{uri:imagePath(item.poster)}}
                    style={{overflow: "hidden", width:"100%", height:100}}
                />
                <ItemInfo>
                    <TypeText>perpetual</TypeText>

                    <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail')}>
                        <TitleText numberOfLines={2}>{item.title}</TitleText>
                    </TouchableOpacity>

                    <TimeTextWrapper>
                        <TimeText style={{marginBottom:-4}}>{item.date}</TimeText>
                        <Sep />
                        <TimeText>閱讀時間 {item.duration}</TimeText>
                    </TimeTextWrapper>

                    <Row style={{marginTop:2,marginLeft:3}}>
                        {item.hasVideo==1? <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={'contain'} style={{width:15,height:15,opacity:0.7,marginRight:7}}/> :null}
                        {item.hasAudio==1?<Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'} style={{width:15,height:15,opacity:0.7,}}/> :null}

                        <Row style={{marginLeft:'auto',marginTop:1}}>
                            <Upvote size={16} id={item.id} count={999}/>
                            <Bookmark size={16} id={item.id}/>
                        </Row>
                    </Row>

                </ItemInfo>
            </StyledItem>
        );
    };
    
    return (
        <StyledContainer>
            {items.map((item, index)=>renderItem(item, index))}
        </StyledContainer>
    );
}
  