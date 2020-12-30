import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import { 
    StyledContainer,
    StyledItem, 
    Row,
    ItemWrapper,
    TitleText,
    TimeTextWrapper,
    TimeText,
    Sep,
    GradientWrapper,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';
import {imagePath,date,readingTime} from '@/utils/MyUtils';

import * as RootNavigation from '@/utils/RootNavigation';

export default function ArticlesSlider(props) {

    const {items} = props;

    const renderItem = (item,index) => {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail',{id:item.id})}>
                <StyledItem>

                    <Image 
                        resizeMode={"cover"} 
                        source={{uri:imagePath(item.poster)}}
                        style={{position:'absolute', width:"100%", height:"100%"}}
                    />

                    <GradientWrapper>
                        <LinearGradient 
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            locations={[0.0, 0.4, 0.6, 0.8, 1]}
                            colors={['rgba(0,0,0,0.38)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.95)', 'rgba(0,0,0,1)']} 
                            style={{height:'100%'}}
                        />
                    </GradientWrapper>

                    <View style={{marginTop:10,width:'100%',paddingHorizontal:5}}>
                        <TimeTextWrapper>
                            <TimeText style={{marginBottom:-4}}>{date(item.date)}</TimeText>
                            <Sep />
                            <TimeText>閱讀時間 {readingTime(item.reading_time)}</TimeText>
                        </TimeTextWrapper>

                        <Row style={{marginTop:4,marginLeft:3}}>
                            {item.hasVideo==1? <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={'contain'} style={{width:17,height:17,opacity:0.7,marginRight:7}}/> :null}
                            {item.hasAudio==1?<Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'} style={{width:17,height:17,opacity:0.7,}}/> :null}
                        </Row>
                    </View>

                    <View style={{marginTop:'auto',marginBottom:8,width:'100%',paddingHorizontal:10}}>
                        <TitleText numberOfLines={2}>{item.title}</TitleText>
                        <Row style={{marginVertical:3,marginLeft:'auto'}}>
                            <Upvote size={16} id={item.id} count={999}/>
                            <Bookmark size={16} id={item.id}/>
                        </Row>
                    </View>
                </StyledItem>
            </TouchableOpacity>
        );
    };
    
    return (
        <StyledContainer>
            {/* <NativeViewGestureHandler
                ref={(ref)=>store.dispatch({type:'TAB_ADD_REF',ref:ref})}
            > */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ItemWrapper>
                        {items.map((item, index)=>renderItem(item, index))}
                    </ItemWrapper>
                </ScrollView>
            {/* </NativeViewGestureHandler> */}
        </StyledContainer>
    );
}
  