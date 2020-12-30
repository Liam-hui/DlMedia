import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import { 
    StyledContainer,
    StyledItem, 
    Row,
    ItemInfo,
    TypeText,
    TitleText,
    OtherInformationTextWrapper,
    OtherInformationText,
    Sep,
    OptionText,
} from './styles';
import {
    PanGestureHandler,
    NativeViewGestureHandler,
    State,
} from 'react-native-gesture-handler';
import SepLine from "@/components/SepLine";

import * as RootNavigation from '@/utils/RootNavigation';

export default function NewArticleBlock(props) {

    const {items} = props;
   
    const renderItem = (item,index) => {
        return(
            <TouchableOpacity onPress={()=>RootNavigation.navigate('detail')}>
                <StyledItem>
                    <Image  
                        resizeMode={"cover"} 
                        source={item.visual} 
                        style={{overflow: "hidden", width:"100%", height:120}}
                    />
                    
                    <ItemInfo>
                        <TypeText>{item.type}</TypeText>
                        <TitleText numberOfLines={2}>{item.title}</TitleText>

                        <OtherInformationTextWrapper>
                            <OtherInformationText style={{marginBottom:-4}}>{item.date}</OtherInformationText>
                            <Sep />
                            <OtherInformationText>閱讀時間 {item.duration}</OtherInformationText>
                        </OtherInformationTextWrapper>

                        <Row style={{marginVertical:3,marginLeft:3}}>
                            <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={'contain'} style={{width:15,height:15,opacity:0.7,marginRight:7}}/>
                            <Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'} style={{width:15,height:15,opacity:0.7,}}/>

                            <Image source={require("../../../assets/images/icons/icon-upvote.png")} resizeMode={'contain'} style={{width:15,height:15,marginLeft:'auto',marginRight:4}}/>
                            <OptionText>{item.goodRank}</OptionText>
                            <Image source={require("../../../assets/images/icons/icon-downvote.png")} resizeMode={'contain'} style={{width:15,height:15,marginRight:4}}/>
                            <Image source={require("../../../assets/images/icons/icon-bookmark.png")} resizeMode={'contain'} style={{width:15,height:15,marginRight:7}}/>
                        </Row>
                    </ItemInfo>

                </StyledItem>
            </TouchableOpacity>
        );
    };
    
    return (
        <StyledContainer>
            <NativeViewGestureHandler
                ref={props.scrollRef}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {items.map((item, index)=>renderItem(item, index))}
                </ScrollView>
            </NativeViewGestureHandler>
        </StyledContainer>
    );
}
  