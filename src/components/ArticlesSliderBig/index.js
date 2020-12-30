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
    CategoryText,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Upvote from '@/components/Upvote';
import Bookmark from '@/components/Bookmark';
import {imagePath,date,readingTime} from '@/utils/MyUtils';

import * as RootNavigation from '@/utils/RootNavigation';

export default function ArticlesSliderBig(props) {

    const {items} = props;

    const renderItem = (item,index) => {
        return(
            
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
                        locations={[0.0, 0.1, 0.4, 0.6, 0.8, 1]}
                        colors={['rgba(0,0,0,0.9)','rgba(0,0,0,0.7)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.95)', 'rgba(0,0,0,1)']} 
                        style={{height:'100%'}}
                    />
                </GradientWrapper>

                <View style={{marginTop:20,width:'100%',paddingHorizontal:18}}>
                    <TimeTextWrapper>
                        <TimeText style={{marginBottom:0}}>{date(item.date)}</TimeText>
                        <Sep />
                        <TimeText>閱讀時間 {readingTime(item.reading_time)}</TimeText>
                    </TimeTextWrapper>

                    <Row style={{marginTop:4,marginLeft:3}}>
                        {item.hasVideo==1? <Image source={require("../../../assets/images/icons/icon-video.png")} resizeMode={'contain'} style={{width:20,height:20,opacity:0.7,marginRight:8}}/> :null}
                        {item.hasAudio==1?<Image source={require("../../../assets/images/icons/icon-audio.png")} resizeMode={'contain'} style={{width:20,height:20,opacity:0.7,}}/> :null}
                    </Row>
                </View>

                <View style={{marginTop:'auto',marginBottom:8,width:'100%',paddingHorizontal:18}}>
                    <CategoryText>machine</CategoryText>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>RootNavigation.navigate('detail',{id:item.id})}>
                        <TitleText numberOfLines={2}>{item.title}</TitleText>
                    </TouchableOpacity>
                    <Row style={{marginLeft:'auto'}}>
                        <Upvote size={18} id={item.id} count={999}/>
                        <Bookmark size={18} id={item.id}/>
                    </Row>
                </View>
            </StyledItem>
        );
    };
    
    return (
        <StyledContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ItemWrapper>
                    {items.map((item, index)=>renderItem(item, index))}
                </ItemWrapper>
            </ScrollView>
        </StyledContainer>
    );
}
  