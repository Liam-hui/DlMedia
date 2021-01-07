import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { 
    StyledContainer, 
    Row,
    BackText,
    Button,
    TopIcon,
    GradientWrapper 
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import store from '@/store';
import Bookmark from '@/components/Bookmark';

import Animated,{
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    Easing,
    withTiming,
  } from "react-native-reanimated";

export default function ArticleTopBar(props) {
    const {back,goBack,id,scrollDirection} = props;

    let topBarOpacity = useSharedValue(0);

    useEffect(() => {
        // const animateSetting = {duration: 200 ,easing: Easing.bezier(0.25, 0.1, 0.25, 1)};
        if(scrollDirection=='down') topBarOpacity.value = withTiming(0, {duration: 500});
        else if(scrollDirection=='up') topBarOpacity.value = withTiming(1, {duration: 200});
    }, [scrollDirection]);

    const topBarStyle = useAnimatedStyle(()=>{
        return {
          opacity:topBarOpacity.value,
        }
      })  
       
    return (
        <StyledContainer as={Animated.View} style={topBarStyle}>
            <GradientWrapper>
                <LinearGradient 
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0.0,  1]}
                    colors={['rgba(100,100,100,0.9)', 'rgba(120,120,120,0)']} 
                    style={{height:'100%'}}
                />
            </GradientWrapper>

            <SafeAreaView>
                <Row style={{paddingHorizontal:12,marginTop:15}}>
                <Row as={TouchableOpacity} onPress={()=>goBack()}>
                    <BackText style={{marginBottom:-4}}>{'<  '}</BackText>
                    <BackText style={{marginBottom:-4}}>back</BackText>
                </Row>
                <Row style={{marginLeft:'auto'}}>
                    <Button as={TouchableOpacity}>
                        <TopIcon source={require("../../../../assets/images/icons/icon-add.png")} resizeMode={"contain"} />
                    </Button>
                    <Button as={TouchableOpacity}>
                        <TopIcon source={require("../../../../assets/images/icons/icon-share.png")} resizeMode={"contain"} />
                    </Button>
                    <Button as={TouchableOpacity}>    
                        <Bookmark size={22} id={id}/>
                    </Button>
                    <Button as={TouchableOpacity}>
                        <TopIcon source={require("../../../../assets/images/icons/icon-night-mode.png")} resizeMode={"contain"} />
                    </Button>
                    <Button as={TouchableOpacity} onPress={()=>store.dispatch({type:'CHANGE_ARTICLE_FONT_SIZE'}) }>
                        <TopIcon source={require("../../../../assets/images/icons/icon-add-fontsize.png")} resizeMode={"contain"} />
                    </Button>
                </Row>
                </Row>
            </SafeAreaView>
        </StyledContainer>
    );
}
  