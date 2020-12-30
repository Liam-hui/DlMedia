import React, {useState, useEffect} from 'react';
import {View, Image, Text, Dimensions} from 'react-native'

const pic_width = Math.round(Dimensions.get('window').width*0.18);

import { 
    StyledContainer,
    ContentContainer,
    TopColor,
    PicWrapper,
    AuthorText,
    IntroWrapper,
    IntroText,
    ShowdowWrapper,
    ButtonWrapper,
    ButtonText,
} from './styles';

export default function ArticleAuthorIntro(props) {

    const {name,intro,pic,color} = props;
    const quote_img_size = 18;
       
    return (
        <StyledContainer>
            <TopColor style={{backgroundColor:color}}/>
            <ContentContainer>
                <ShowdowWrapper style={{shadowOffset: { width: -1.5,height: 4,}}}>
                    <PicWrapper style={{width:pic_width,height:pic_width,borderRadius:pic_width*0.5}}>
                        <Image 
                            resizeMode={"cover"} 
                            source={pic} 
                            style={{width:'100%', height:'100%'}}
                        />
                    </PicWrapper>
                </ShowdowWrapper>
                <IntroWrapper>
                    <AuthorText>{'作者 '+name}</AuthorText>
                    <IntroText numberOfLines={4}>{intro}</IntroText>
                    <ButtonWrapper>
                        <ButtonText>查看更多</ButtonText>
                        {/* <Image source={require("../../../assets/images/icons/icon-read-more.png")} resizeMode={'contain'} style={{width:25,height:25,marginTop:-8}}/> */}
                    </ButtonWrapper>
                </IntroWrapper>
            </ContentContainer>
        </StyledContainer>
    );
}
  