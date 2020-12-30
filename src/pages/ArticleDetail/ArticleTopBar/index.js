import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { 
    StyledContainer, 
    Row,
    BackText,
    TopIcon,
    CategoryText,
    TitleText,
    TagText,
    OtherInformationText,
    OptionText,
    Sep,
    GradientWrapper,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import store from '@/store';

export default function ArticleTop(props) {
    const {back,goBack} = props;
       
    return (
        <StyledContainer>
            <SafeAreaView>
                <Row style={{paddingHorizontal:12,marginTop:15}}>
                <Row as={TouchableOpacity} onPress={()=>goBack()}>
                    <BackText style={{marginBottom:-4}}>{'<  '}</BackText>
                    <BackText style={{marginBottom:-4}}>{back}</BackText>
                </Row>
                {/* <Row style={{marginLeft:'auto'}}>
                    <TouchableOpacity>
                        <TopIcon source={require("../../../assets/images/icons/icon-add.png")} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TopIcon source={require("../../../assets/images/icons/icon-share.png")} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <TouchableOpacity>    
                        <TopIcon source={require("../../../assets/images/icons/icon-bookmark.png")} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TopIcon source={require("../../../assets/images/icons/icon-night-mode.png")} resizeMode={"contain"} />
                        </TouchableOpacity>
                    <TouchableOpacity onPress={()=>store.dispatch({type:'INCREASE_ARTICLE_FONT_SIZE'}) }>
                        <TopIcon source={require("../../../assets/images/icons/icon-font-size.png")} resizeMode={"contain"} />
                    </TouchableOpacity>
                </Row> */}
                </Row>
            </SafeAreaView>
        </StyledContainer>
    );
}
  